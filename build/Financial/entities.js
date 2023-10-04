var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, Column, ManyToOne } from "typeorm";
import { Product } from "../product/entities.js";
let Money = class Money {
};
__decorate([
    Column()
], Money.prototype, "amount", void 0);
__decorate([
    Column({
        length: 3
    })
], Money.prototype, "currency", void 0);
__decorate([
    ManyToOne(() => Product, (product) => product.price)
], Money.prototype, "product", void 0);
Money = __decorate([
    Entity()
], Money);
export { Money };
