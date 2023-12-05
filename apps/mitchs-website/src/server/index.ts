import { db } from './db';
import { router } from './trpc';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { blogRouter } from './routers/blogRouter';
import { imgRouter } from './routers/imgRouter';
 
const appRouter = router({
  img: imgRouter,
  blog: blogRouter,

});


// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});
 
server.listen(3000);
