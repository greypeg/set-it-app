import { businessRouter } from "~/server/api/routers/business";
import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/user";
import { serviceRouter } from "./routers/service";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  service: serviceRouter,
  business: businessRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
