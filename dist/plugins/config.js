import fastifyEnv from "@fastify/env";
import fp from "fastify-plugin";
export default fp(async (fastify) => {
    await fastify.register(fastifyEnv, {
        dotenv: true,
        schema: {
            type: "object",
            required: [
                "HTTP_HOST",
                "SUPERTOKENS_CONNECTION_URI",
                "SUPERTOKENS_API_KEY",
                "SUPERTOKENS_APPNAME",
                "SUPERTOKENS_API_DOMAIN",
                "SUPERTOKENS_WEBSITE_DOMAIN",
                "SUPERTOKENS_API_BASE_PATH",
                "SUPERTOKENS_WEBSITE_BASE_PATH",
                "CORS_ORIGIN_URL"
            ],
            properties: {
                HTTP_PORT: {
                    type: "number",
                    default: 3001,
                },
                HTTP_HOST: {
                    type: "string",
                },
                ALLOWED_ORIGINS: {
                    type: "string",
                },
                SUPERTOKENS_CONNECTION_URI: {
                    type: "string",
                },
                SUPERTOKENS_API_KEY: {
                    type: "string",
                },
                SUPERTOKENS_APPNAME: {
                    type: "string",
                },
                SUPERTOKENS_API_DOMAIN: {
                    type: "string",
                },
                SUPERTOKENS_WEBSITE_DOMAIN: {
                    type: "string",
                },
                SUPERTOKENS_API_BASE_PATH: {
                    type: "string",
                },
                SUPERTOKENS_WEBSITE_BASE_PATH: {
                    type: "string",
                },
                CORS_ORIGIN_URL: {
                    type: "string",
                }
            },
        },
    });
});
