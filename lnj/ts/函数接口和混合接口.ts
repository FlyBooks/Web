//函数接口:用来限定函数的
interface SumInterface {
  (a: number, b: number): number;
}

let sumTwo: SumInterface = function (x: number, y: number): number {
  return x + y;
};

console.log(sumTwo(5, 4));

//混合接口：

let demo = (() => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
})();

console.log(demo());
console.log(demo());
console.log(demo());

interface CountInterface {
  (): void;
  count: number;
}

let getCount = (function (): CountInterface {
  let fn = <CountInterface>function () {
    fn.count++;
    console.log(fn.count);
  };

  fn.count = 0;
  return fn;
})();

getCount();
getCount();
getCount();