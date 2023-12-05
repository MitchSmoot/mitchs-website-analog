import { publicProcedure, router } from "../trpc";

export const imgRouter = router({
  list: publicProcedure.query(async () => {
    const images = await db.image.findMany();
    return images;
  }),
  get: publicProcedure.query(async ({ id }) => {
    const image = await db.image.findUnique({
      where: { id },
    });
    return image;
  }),
  create: publicProcedure.mutation(async ({ input }) => {
    const image = await db.image.create({
      data: input,
    });
    return image;
  }),
  update: publicProcedure.mutation(async ({ id, input }) => {
    const image = await db.image.update({
      where: { id },
      data: input,
    });
    return image;
  }),
  delete: publicProcedure.mutation(async ({ id }) => {
    const image = await db.image.delete({
      where: { id },
    });
    return image;
  }),
})