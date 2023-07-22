import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import React, { useState } from "react";
import { trpc, trpcClient } from "api/reactTRPC";

export function TRPCProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
