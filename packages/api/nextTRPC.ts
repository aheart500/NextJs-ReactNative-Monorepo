"use client";

import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import type { AppRouter } from "./routers/_app";
import { BASE_URI } from "./constants";

const getBaseUrl = () => {
  if (typeof window !== "undefined") return "";

  return BASE_URI;
};
export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
  ssr: true,
});
