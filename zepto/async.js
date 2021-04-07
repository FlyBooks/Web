// console.log("global begin");
// setTimeout(() => {
//   console.log("timer1 invoke");
// }, 1800);

// setTimeout(() => {
//   console.log("timer2 invoke");
//   setTimeout(function () {
//     console.log("timer3 invoke");
//   }, 1000);
// }, 1000);

// console.log("global end");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}
console.log("script start");
async1();
console.log("script end");
