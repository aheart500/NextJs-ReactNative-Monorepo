import { publicProcedure, router } from "..";
import prisma from "prisma";
const helloRouter = router({
  hi: publicProcedure.query(async ({ ctx }) => {
    const users = await prisma.user.findMany({});
    return users;
  }),
});
export default helloRouter;
