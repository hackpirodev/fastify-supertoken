import {FastifyPluginAsyncTypebox} from '@fastify/type-provider-typebox';

const getByIdRoute:FastifyPluginAsyncTypebox = async fastify => {
    fastify.get(
      '/',
      async request => {
        return 'Hello World!'
      },
    );
  };
  
  export default getByIdRoute;