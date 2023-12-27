import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const businessInput = z.string({ required_error: "Name" }).min(1).max(50)

export const businessRouter = createTRPCRouter({

  getBusiness: publicProcedure.query(async ({ ctx }) => {
    const business = await ctx.prisma.business.findFirst({
      where: {
        userId: ctx.session?.user.id,
      },
      include: { services: true, staff: true },

    })
    return business
  }),
  create: protectedProcedure.input(businessInput).mutation(async ({ ctx, input }) => {
    const userId = ctx.session.user?.id; // Assuming you have user information in the context

    if (!userId) {
      throw new Error('User not authenticated');
    }
    // Update the user's hasBusiness field to true
    await ctx.prisma.user.update({
      where: { id: userId },
      data: { hasBusiness: true },
    });
    return ctx.prisma.business.create({
      data: {
        name: input,
        user: {
          connect: {
            id: ctx.session.user.id
          }
        }
      }
    })
  }),
  delete: protectedProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
    return ctx.prisma.business.delete({
      where: {
        id: input
      }
    })
  })
});
