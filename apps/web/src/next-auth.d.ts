import NextAuth from "next-auth";
import { UserVisibleData } from ".";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  type User = UserVisibleData;
  interface Session {
    user: UserVisibleData;
  }
}
declare module "next-auth/jwt" {
  type JWT = { user: UserVisibleData };
}
