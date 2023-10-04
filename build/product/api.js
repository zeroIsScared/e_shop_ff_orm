import { Money } from "../Financial/entities.js";
import { Product } from "./entities.js";
export const productRoutes = (server, options) => {
    server.post('/product', async (request, reply) => {
        const product = new Product();
        const money = new Money();
        product.name = 'Iphone'; //request.body.name;
        money.amount = 1000;
        money.currency = 'USD';
        await this.orm.manager.save(product);
    });
};
