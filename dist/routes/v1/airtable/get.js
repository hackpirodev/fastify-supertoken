const getByIdRoute = async (fastify) => {
    fastify.get('/', async (request) => {
        return 'Hello World!';
    });
};
export default getByIdRoute;
