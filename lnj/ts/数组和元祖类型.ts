//数组类型
//定义一个数组，这个数组将来只能存储数值类型的数据

let arr1: number[];
arr1 = [1, 2, 3, 4];
console.log(arr1);

// arr1 = ["er0", 1, 2, 3]; 报错

let arr2: Array<number>;

arr2 = [9, 0, 11, 23];

console.log(arr2);

//联合类型的数组
let arr3: (string | number)[];

arr3 = [1, "m", 2, "c"];
console.log(arr3, "arr3");

//任意类型的数组
let arr4: any[];
arr4 = [1, 4, "w", true, [123, 333]];
console.log(arr4, "arr4");

//元祖就是对数组的扩展，定长
let arrUpgrade: [string, number, boolean];
arrUpgrade = ["he", 1, true];
console.log(arrUpgrade, "upgradeArr");
