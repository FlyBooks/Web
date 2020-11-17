"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cache {
    constructor() {
        this.data = [];
    }
    add(value) {
        this.data.push(value);
    }
    all() {
        return this.data;
    }
}
let cache = new Cache();
cache.add(1);
cache.add(2);
cache.add(3);
console.log(cache.all());
