import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
} from "~/server/api/trpc";

const staffInput = z.object({
    name: z.string({ required_error: "Name" }).min(1).max(50),
    email: z.string().min(1, { message: "Email is required" }).email(),
});

const deleteStaff = z.object({
    id: z.number()
});

export const staffRouter = createTRPCRouter({

    create: protectedProcedure.input(staffInput).mutation(async ({ ctx, input }) => {
        const userId = ctx.session.user?.id;

        if (!userId) {
            throw new Error('User not authenticated');
        }

        const user = await ctx.prisma.user.findUnique({ where: { id: userId }, include: { business: true } });

        if (!user || !user.business) {
            throw new Error('User does not have a business');
        }
        const createdStaff = await ctx.prisma.staff.create({
            data: {
                ...input,
                businessId: user.business.id,
            },
        });

        return createdStaff;
    }),

    delete: protectedProcedure.input(deleteStaff).mutation(async ({ ctx, input }) => {
        const { id } = input;
        const userId = ctx.session.user?.id;
        if (!userId) {
            throw new Error('User not authenticated');
        }

        const user = await ctx.prisma.user.findUnique({ where: { id: userId }, include: { business: { include: { staff: true } } } });

        if (!user || !user.business) {
            throw new Error('User does not have a business');
        }

        const staffToDelete = user.business.staff.find((staff) => staff.id === id);

        if (!staffToDelete) {
            throw new Error('Staff not found');
        }

        const deletedStaff = await ctx.prisma.staff.delete({ where: { id } });

        return deletedStaff;
    }),
});
