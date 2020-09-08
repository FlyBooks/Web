class ShakeFood {
  constructor(width, height, img, snakeMap) {
    this.width = width;
    this.height = height;
    this.img = img;
    this.snakeMap = snakeMap;
    let oMapProps = getComputedStyle(this.snakeMap.oMap);
    this.rowNums = parseInt(oMapProps.width) / this.width - 1;
    this.colNums = parseInt(oMapProps.height) / this.height - 1;
  }

  render() {
    let oDiv = document.createElement("div");
    const { x, y } = this.generateLocation();
    oDiv.style.position = "absolute";
    oDiv.style.left = this.width * x + "px";
    oDiv.style.top = this.height * y + "px";
    oDiv.style.width = this.width + "px";
    oDiv.style.height = this.height + "px";

    oDiv.style.background = `url(${this.img})`;
    this.snakeMap.oMap.appendChild(oDiv);
  }

  generateLocation() {
    let x = Math.ceil(Math.random() * this.rowNums);
    let y = Math.ceil(Math.random() * this.colNums);
    return { x: x, y: y };
  }
}
