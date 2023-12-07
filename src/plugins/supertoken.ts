import { plugin } from "supertokens-node/framework/fastify/index.js";
import fp from "fastify-plugin";
import formDataPlugin from "@fastify/formbody";

export default fp(async (fastify) => {
	await fastify.register(formDataPlugin);
	await fastify.register(plugin);
});
