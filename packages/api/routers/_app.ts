import { router } from "..";
import helloRouter from "./hello";
import authRouter from "./auth";

export const appRouter = router({
  hello: helloRouter,
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
