import fastify from 'fastify';
import { Product } from './product/entities.js';
import { productRoutes } from './product/api.js';
const server = fastify();
server.register(import('fastify-typeorm-plugin'), {
    username: 'postgres',
    host: 'localhost',
    database: 'e_shop_ff_orm',
    password: '01133',
    port: 5432,
    type: 'postgres',
    entities: [Product],
});
server.register(productRoutes);
const product = Product;
server.get('/', async (request, reply) => {
    return reply.code(200).send({ status: 'active' });
});
server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server listening at${address}`);
});
