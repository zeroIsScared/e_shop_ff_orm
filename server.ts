
import fastify from 'fastify';
import "reflect-metadata";
import { Money } from './Financial/entities.js';
import { Product } from './product/entities.js';



import client from './ormconfig.ts';
import { productRoutes } from './product/api.js';

const  server = fastify();

server.register(productRoutes);
server.register(require('fastify-typeorm-plugin'),{
    user: 'postgres',
    host: '127.0.0.1',
    database: 'e_shop_ff_orm',
    password: '01133',
    port: 5432,
    type: 'postgres',
    entities: [Product, Money],
    synchronize: true,
    logging: true,
    })


const product = Product;

server.get('/', async(request,reply)=>{
    
 return reply.code(200).send({status:'active'});
});



server.listen({port:3000}, (err, address)=>{
    if(err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server listening at${address}`);
})