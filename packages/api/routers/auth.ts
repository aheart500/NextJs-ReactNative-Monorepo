import { publicProcedure, router } from "..";
import { TRPCError } from "@trpc/server";
import { hash } from "argon2";
import prisma from "prisma";
import z from "zod";

export const userShcema = z.object({
  name: z.string().min(4),
  email: z.string().min(8),
  password: z.string().min(8),
  profile_pic: z.string().nullish(),
  country: z.string(),
});
const authRouter = router({
  signup: publicProcedure.input(userShcema).mutation(async ({ input }) => {
    const { email, password, country, name, profile_pic } = input;
    const exists = await prisma.user.findFirst({ where: { email } });
    if (exists) {
      throw new TRPCError({
        code: "CONFLICT",
        message: "User already exists.",
      });
    }
    const hashedPassword = await hash(password);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        country,
        name,
        profile_pic,
      },
    });
    return {
      status: 201,
      message: "Account created successfully",
      result: user.email,
    };
  }),
});

export default authRouter;
