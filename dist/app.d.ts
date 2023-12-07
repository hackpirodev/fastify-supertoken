import { AutoloadPluginOptions } from "@fastify/autoload";
import { FastifyPluginAsync } from "fastify";
declare module "fastify" {
    interface FastifyInstance {
        config: {
            ALLOWED_ORIGINS: string;
        };
    }
}
export type AppOptions = Partial<AutoloadPluginOptions>;
declare const app: FastifyPluginAsync<AppOptions>;
export default app;
export { app };
