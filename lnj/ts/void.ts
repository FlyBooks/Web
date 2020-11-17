function test(): void {
  console.log("void类型测试");
}
test();

/*
never类型用于那些永不存在的类型
一般用于抛出异常或根本不可能有返回值的函数
*/

// function Error2():never{
//   throw new Error('something wrong!!!');
// }

// Error2();

let obj: object;
obj = { name: "Eva", age: 18 };
console.log(obj);
