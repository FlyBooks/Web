"use strict";
let sumTwo = function (x, y) {
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
let getCount = (function () {
    let fn = function () {
        fn.count++;
        console.log(fn.count);
    };
    fn.count = 0;
    return fn;
})();
getCount();
getCount();
getCount();
