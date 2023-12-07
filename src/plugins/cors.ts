import cors from "@fastify/cors";
import fp from "fastify-plugin";
import supertokens from "../services/supertoken.js";

export default fp(async (fastify) => {
	// const config = fastify.config.ALLOWED_ORIGINS;
	// if (!config) {
	// 	console.log("ALLOWED_ORIGINS not set")
	// 	return;
	// }
	// const origins = config.split(",").map((str) => str.trim());
	// const origin = origins.includes("*") ? "*" : origins;

	fastify.register(cors, {
		// origin,
		allowedHeaders: ["Content-Type", ...supertokens.getAllCORSHeaders()],
		credentials: true,
	});
});
