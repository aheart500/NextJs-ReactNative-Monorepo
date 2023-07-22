import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "../../../../utils/auth/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [CredentialsProvider],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user as any;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },

  jwt: { maxAge: 15 * 24 * 30 * 60 },
  pages: {
    signIn: "/",
    newUser: "/register",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
