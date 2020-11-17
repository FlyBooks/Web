interface ReactangleWidth {
  width: number;
}

interface RectanleHeight {
  height: number;
}

interface FullRectangle extends ReactangleWidth, RectanleHeight {
  color: string;
}

let rectangleObj: FullRectangle = {
  width: 100,
  color: "skyblue",
  height: 50,
};
