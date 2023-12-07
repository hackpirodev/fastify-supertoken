import AutoLoad from "@fastify/autoload";
import path, { join } from "node:path";
import { fileURLToPath } from "node:url";
import fastifyEnv from "@fastify/env";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = async (fastify, opts) => {
    // Do not touch the following lines
    // This loads all plugins defined in plugins
    // those should be support plugins that are reused
    // through your application
    await fastify.register(fastifyEnv, {
        dotenv: true,
        schema: {
            type: "object",
            properties: {
                ALLOWED_ORIGINS: {
                    type: "string",
                },
            },
        },
    });
    await fastify.register(AutoLoad, {
        dir: join(__dirname, "plugins"),
        options: opts,
        forceESM: true,
    });
    // This loads all plugins defined in routes
    // define your routes in one of these
    await fastify.register(AutoLoad, {
        dir: join(__dirname, "routes"),
        options: { prefix: "/api/" },
        routeParams: true,
    });
    // await fastify.register(AutoLoad, {
    //   dir: join(__dirname, 'modules'),
    //   options: opts,
    //   encapsulate: false,
    //   maxDepth: 1,
    //   forceESM: true,
    // });
    fastify.ready(() => fastify.log.info(fastify.printRoutes()));
};
export default app;
export { app };
