function getSum(...args: number[]): number {
  let sum: number = 0;
  args.forEach((value) => {
    sum += value;
  });
  return sum;
}

console.log(getSum(1, 2, 3, 5, 6, 7, 33));
