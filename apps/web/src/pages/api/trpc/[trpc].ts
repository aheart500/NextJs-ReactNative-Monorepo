import * as trpcNext from "@trpc/server/adapters/next";
import { createContext } from "api/context";
import { appRouter } from "api/routers/_app";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});
