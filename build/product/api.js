import { Money } from "../Financial/entities.js";
import { Product } from "./entities.js";
export const productRoutes = async (server, options) => {
    server.post('/', async (request, reply) => {
        const product = new Product();
        console.log(product);
        const money = new Money();
        product.name = 'Iphone'; //request.body.name;
        product.price = new Money();
        product.price.amount = 1000;
        product.price.currency = 'USD';
        await server.orm.manager.save(product);
        console.log(product);
        return reply.send({ rep: 'ok' });
    });
};
