import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";

export const userSchema = z.object({
    name: z.string().min(3),
    email: z.string().min(1, { message: "Email is required" }).email(),
    password: z.string().min(8, { message: "Password must be atleast 6 characters" })
        .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
        .regex(new RegExp(".*[a-z].*"), "One lowercase character")
        .regex(
            new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
            "One special character"
        ),
});

export const userRouter = createTRPCRouter({
    signUp: publicProcedure
        .input(
            userSchema
        )
        .mutation(({ input, ctx }) => {
            const user = ctx.prisma.user.create({
                data: {
                    ...input,
                },
            });
            return user;
        }),

    signIn: publicProcedure
        .input(
            userSchema
        )
        .mutation(({ input, ctx }) => {
            const { email } = input;
            const user = ctx.prisma.user.findUnique({
                where: {
                    email
                }
            });
            if (!user)
                //throw exception


                return user;
        }),

    getUser: protectedProcedure.query(async ({ ctx }) => {
        const user = await ctx.prisma.user.findFirst({
            where: {
                id: ctx.session?.user.id
            },
            include: { business: true },
        })
        return user
    }),

    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.example.findMany();
    }),
});
