import { AutoloadPluginOptions } from "@fastify/autoload";
import { FastifyPluginAsync } from "fastify";
export type AppOptions = Partial<AutoloadPluginOptions>;
declare const app: FastifyPluginAsync<AppOptions>;
export default app;
export { app };
