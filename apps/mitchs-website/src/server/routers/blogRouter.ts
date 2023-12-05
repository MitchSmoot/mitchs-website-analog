import { publicProcedure, router } from "../trpc";

export const blogRouter = router({
  list: publicProcedure.query(async () => {
    const posts = await db.post.findMany();
    return posts;
  }),
  get: publicProcedure.query(async ({ id }) => {
    const post = await db.post.findUnique({
      where: { id },
    });
    return post;
  }),
  create: publicProcedure.mutation(async ({ input }) => {
    const post = await db.post.create({
      data: input,
    });
    return post;
  }),
  update: publicProcedure.mutation(async ({ id, input }) => {
    const post = await db.post.update({
      where: { id },
      data: input,
    });
    return post;
  }),
  delete: publicProcedure.mutation(async ({ id }) => {
    const post = await db.post.delete({
      where: { id },
    });
    return post;
  }),
});
