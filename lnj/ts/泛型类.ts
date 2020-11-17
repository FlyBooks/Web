export {};

class Cache<T> {
  data: T[] = [];
  add(value: T) {
    this.data.push(value);
  }

  all(): T[] {
    return this.data;
  }
}
let cache = new Cache<number>();

cache.add(1);
cache.add(2);
cache.add(3);

console.log(cache.all());
