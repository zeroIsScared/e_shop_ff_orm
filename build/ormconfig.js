import { Product } from "./product/entities.js";
import { Money } from "./Financial/entities.ts";
const client = ({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'e_shop_ff_orm',
    password: '01133',
    port: 5432,
    type: 'postgres',
    entities: [Product, Money],
    synchronize: true,
    logging: true,
});
export default client;
