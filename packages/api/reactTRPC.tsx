import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import type { AppRouter } from "./routers/_app";
import { BASE_URI } from "./constants";

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${BASE_URI}/api/trpc`,

      // You can pass any HTTP headers you wish here
      async headers() {
        return {
          authorization: "",
        };
      },
    }),
  ],
});
