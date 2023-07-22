"use client";
import { trpc } from "api/nextTrpc";
import { useSession } from "next-auth/react";

export default function Home() {
  const h = trpc.hello.hi.useQuery();
  const { data } = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
