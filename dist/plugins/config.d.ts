/// <reference types="node" resolution-mode="require"/>
declare module "fastify" {
    interface FastifyInstance {
        config: {
            HTTP_PORT: number;
            HTTP_HOST: string;
            SUPERTOKENS_CONNECTION_URI: string;
            SUPERTOKENS_API_KEY: string;
            SUPERTOKEN_API_KEY: string;
            SUPERTOKENS_APPNAME: string;
            SUPERTOKENS_API_DOMAIN: string;
            SUPERTOKENS_WEBSITE_DOMAIN: string;
            SUPERTOKENS_API_BASE_PATH: string;
            SUPERTOKENS_WEBSITE_BASE_PATH: string;
            CORS_ORIGIN_URL: string;
        };
    }
}
declare const _default: (fastify: import("fastify").FastifyInstance<import("fastify").RawServerDefault, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>, import("fastify").FastifyBaseLogger, import("fastify").FastifyTypeProviderDefault>) => Promise<void>;
export default _default;
