import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import prisma from "prisma";
import { verify } from "argon2";

const credentialsSchema = z.object({
  email: z.string().min(8),
  password: z.string().min(8),
});

const CredentialsProvider = Credentials({
  name: "Credentials",
  credentials: {
    email: {
      label: "Email",
      type: "email",
      placeholder: "dan_abramov@gmail.com",
    },
    password: { label: "Password", type: "password" },
  },
  authorize: async (credentials) => {
    const creds = await credentialsSchema.parseAsync(credentials);

    const user = await prisma.user.findFirst({ where: { email: creds.email } });

    if (!user) {
      return null;
    }
    const isValidPassword = await verify(user.password, creds.password);

    if (!isValidPassword) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      country: user.country,
      name: user.name,
      profile_pic: user.profile_pic,
      role: user.role,
      active: user.active,
    };
  },
});

export default CredentialsProvider;
