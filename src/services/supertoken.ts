import Session from "supertokens-node/recipe/session/index.js";
import ThirdPartyPasswordless from "supertokens-node/recipe/thirdpartypasswordless/index.js";
import Dashboard from "supertokens-node/recipe/dashboard/index.js";
import supertokens from "supertokens-node/index.js";
// import { z } from "zod";
console.log("TESTING ENV", {
	SUPERTOKEN_CONNECTION: process.env.SUPERTOKEN_CONNECTION,
	SUPERTOKEN_API_KEY: process.env.SUPERTOKEN_API_KEY,
});
//TODO: INVISTIGATE WHY THIS IS NOT WORKING
// const envSchema = z.object({
// 	SUPERTOKEN_CONNECTION: z.string(),
// 	SUPERTOKEN_API_KEY: z.string(),
// });

// export const envClientSchema = envSchema.parse({
// 	SUPERTOKENS_CONNECTION_URI: process.env.SUPERTOKEN_CONNECTION,
// 	SUPERTOKENS_API_KEY: process.env.SUPERTOKEN_API_KEY,
// });
supertokens.init({
	framework: "fastify",
	supertokens: {
		// These are the connection details of the app you created on supertokens.com
		// biome-ignore lint: we know that from .env we have this value. Testing ZOD but doesn't work
		connectionURI: process.env.SUPERTOKEN_CONNECTION!,
		apiKey: process.env.SUPERTOKEN_API_KEY,
	},
	appInfo: {
		// learn more about this on https://supertokens.com/docs/session/appinfo
		appName: "founder-swap",
		apiDomain: "http://localhost:3000",
		websiteDomain: "http://localhost:3000",
		apiBasePath: "/auth",
		websiteBasePath: "/auth",
	},
	recipeList: [
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

export default supertokens;
