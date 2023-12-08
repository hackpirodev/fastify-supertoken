// Read the .env file.
// Require library to exit fastify process, gracefully (if possible)
// Require the framework
import Fastify from "fastify";
import closeWithGrace from "close-with-grace";
// Instantiate Fastify with some config
const app = Fastify({
	logger: true,
});

// Register your application as a normal plugin.
await app.register(import("./app.js"));

// delay is the number of milliseconds for the graceful close to finish
const closeListeners = closeWithGrace({ delay: 500 }, async function ({
	signal: _signal,
	err,
	manual: _manual,
}) {
	if (err) {
		app.log.error(err);
	}
	await app.close();
} as closeWithGrace.CloseWithGraceAsyncCallback);
//@ts-ignore TODO: invistigate why this is not working
app.addHook("onClose", async (instance, done) => {
	closeListeners.uninstall();
	done();
});
await app.ready();
// Start listening.
app.listen(
	{
		//TODO: I want use app.config.HTTP_HOST, but it is not working
		host: "0.0.0.0",
		port: 3001,
	},
	(err) => {
		if (err) {
			app.log.error(err);
			process.exit(1);
		}
	},
);
