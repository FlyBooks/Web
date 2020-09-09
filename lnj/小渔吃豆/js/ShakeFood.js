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
    this.generateLocation();
    oDiv.style.position = "absolute";
    oDiv.style.left = this.width * this.x + "px";
    oDiv.style.top = this.height * this.y + "px";
    oDiv.style.width = this.width + "px";
    oDiv.style.height = this.height + "px";

    oDiv.style.background = `url(${this.img})`;
    this.oFood = oDiv;
    this.snakeMap.oMap.appendChild(oDiv);
  }

  generateLocation() {
    this.x = Math.ceil(Math.random() * this.rowNums);
    this.y = Math.ceil(Math.random() * this.colNums);
  }

  removeAndRerender() {
    this.oFood.parentNode.removeChild(this.oFood);
    this.render();
  }
}
