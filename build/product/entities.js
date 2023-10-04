var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Money } from "../Financial/entities.ts";
let Product = class Product {
};
__decorate([
    PrimaryGeneratedColumn()
], Product.prototype, "id", void 0);
__decorate([
    Column({
        length: 100,
    })
], Product.prototype, "name", void 0);
__decorate([
    OneToMany(() => Money, (money) => money.product, { cascade: true })
], Product.prototype, "price", void 0);
Product = __decorate([
    Entity()
], Product);
export { Product };
// in the product module - create the entities.ts - which will hold the product entity class - 
// use typeorm docs to set the next fields : id, name, price - where price will be of type Money - 
// which is an embeddable entity (check the docs) 
// - consisting of amount and currency (the Money entity should be declared in a separate file - 
//     entities.ts in the module - "financial")