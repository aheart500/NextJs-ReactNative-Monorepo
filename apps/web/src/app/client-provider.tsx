"use client";
import { SessionProvider } from "next-auth/react";

import { trpc } from "api/nextTrpc";

function ClientProviders({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default trpc.withTRPC(ClientProviders) as typeof ClientProviders;
