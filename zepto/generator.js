var minimumTotal = function (triangle) {
  const memo = new Array(triangle.length).fill(
    new Array(triangle.length).fill("unknown")
  );

  let df = function (arr, indexX, indexY) {
    if (indexX > arr.length - 1) {
      return 0;
    }
    if (memo[indexX][indexY] !== "unknown") {
      return memo[indexX][indexY];
    }
    return (memo[indexX][indexY] =
      Math.min(df(arr, indexX + 1, indexY), df(arr, indexX + 1, indexY + 1)) +
      arr[indexX][indexY]);
  };

  return df(triangle, 0, 0);
};

minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
