import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

const serviceInput = z.object({
  name: z.string({ required_error: "Name" }).min(1).max(50),
  cost: z.number(),
  time_required: z.number(),
});

const updateServiceInput = z.object({
  name: z.string({ required_error: "Name" }).min(1).max(50),
  cost: z.number(),
  time_required: z.number(),
  id: z.number()
});

const deleteSerivce = z.object({
  id: z.number()
});

export const serviceRouter = createTRPCRouter({

  create: protectedProcedure.input(serviceInput).mutation(async ({ ctx, input }) => {
    const userId = ctx.session.user?.id;

    if (!userId) {
      throw new Error('User not authenticated');
    }

    const user = await ctx.prisma.user.findUnique({ where: { id: userId }, include: { business: true } });

    if (!user || !user.business) {
      throw new Error('User does not have a business');
    }
    const createdService = await ctx.prisma.service.create({
      data: {
        ...input,
        businessId: user.business.id,
      },
    });

    return createdService;
  }),

  update: protectedProcedure.input(updateServiceInput).mutation(async ({ ctx, input }) => {
    const { id, ...updatedFields } = input;
    const userId = ctx.session.user?.id;

    if (!userId) {
      throw new Error('User not authenticated');
    }

    const user = await ctx.prisma.user.findUnique({
      where: { id: userId },
      include: { business: { include: { services: true } } },
    });

    if (!user || !user.business) {
      throw new Error('User does not have a business');
    }

    const serviceToUpdate = user.business.services.find((service) => service.id === id);

    if (!serviceToUpdate) {
      throw new Error('Service not found');
    }

    // Update the service with the provided fields
    const updatedService = await ctx.prisma.service.update({
      where: { id },
      data: updatedFields,
    });

    return updatedService;
  }),

  delete: protectedProcedure.input(deleteSerivce).mutation(async ({ ctx, input }) => {
    const { id } = input;
    const userId = ctx.session.user?.id;
    if (!userId) {
      throw new Error('User not authenticated');
    }

    const user = await ctx.prisma.user.findUnique({ where: { id: userId }, include: { business: { include: { services: true } } } });

    if (!user || !user.business) {
      throw new Error('User does not have a business');
    }

    const serviceToDelete = user.business.services.find((service) => service.id === id);

    if (!serviceToDelete) {
      throw new Error('Service not found');
    }

    const deletedService = await ctx.prisma.service.delete({ where: { id } });

    return deletedService;
  }),
});
