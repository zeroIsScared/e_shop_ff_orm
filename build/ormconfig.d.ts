import { Product } from "./product/entities.js";
import { Money } from "./Financial/entities.ts";
declare const client: {
    user: string;
    host: string;
    database: string;
    password: string;
    port: number;
    type: string;
    entities: (typeof Money | typeof Product)[];
    synchronize: boolean;
    logging: boolean;
};
export default client;
