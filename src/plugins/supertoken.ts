import {
	plugin,
	errorHandler,
} from "supertokens-node/framework/fastify/index.js";
import fp from "fastify-plugin";
import formDataPlugin from "@fastify/formbody";
import cors from "@fastify/cors";

import Supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session/index.js";
import EmailPassword from "supertokens-node/recipe/emailpassword/index.js";
import ThirdPartyPasswordless from "supertokens-node/recipe/thirdpartypasswordless/index.js";
import Dashboard from "supertokens-node/recipe/dashboard/index.js";

export default fp(async (fastify) => {
	Supertokens.init({
		framework: "fastify",
		debug: true,
		supertokens: {
			// These are the connection details of the app you created on supertokens.com
			connectionURI: fastify.config.SUPERTOKENS_CONNECTION_URI,
			apiKey: fastify.config.SUPERTOKENS_API_KEY,
		},
		appInfo: {
			// learn more about this on https://supertokens.com/docs/session/appinfo
			appName: fastify.config.SUPERTOKENS_APPNAME,
			apiDomain: fastify.config.SUPERTOKENS_API_DOMAIN,
			websiteDomain: fastify.config.SUPERTOKENS_WEBSITE_DOMAIN,
			apiBasePath: fastify.config.SUPERTOKENS_API_BASE_PATH,
			websiteBasePath: fastify.config.SUPERTOKENS_WEBSITE_BASE_PATH,
		},
		recipeList: [
			EmailPassword.init(),
			ThirdPartyPasswordless.init({
				flowType: "USER_INPUT_CODE",
				contactMethod: "EMAIL_OR_PHONE",
				/*TODO: See next steps for third party provider setup */
			}),
			Session.init(),
			Dashboard.init(),
			// initializes session features
		],
	});
	fastify.register(cors, {
		origin: fastify.config.CORS_ORIGIN_URL,
		allowedHeaders: ["Content-Type", ...Supertokens.getAllCORSHeaders()],
		methods: ["GET", "PUT", "POST", "DELETE"],
		credentials: true,
	});

	fastify.register(formDataPlugin);
	fastify.register(plugin);

	fastify.setErrorHandler(errorHandler());
});
