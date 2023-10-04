import { Money } from "../Financial/entities.js";
import { Product } from "./entities.js"

export const productRoutes =async (server,options) =>{

 server.post('/', async (request, reply) => {
 
    const product = new Product();
    console.log(product)
    const money = new Money()
    product.name =request.body.name;
    product.price = new Money();
    product.price.amount= request.body.amount;
    product.price.currency = request.body.currency;
    await server.orm.manager.save(product);
    console.log(product)
 return reply.send({rep:'ok'});
 })
}
