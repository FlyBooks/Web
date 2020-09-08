class Snake {
  constructor({
    width = 100,
    height = 100,
    headImg = "./images/head.png",
    bodyImgs = "./images/body.png",
    snakeMap,
  }) {
    this.width = width;
    this.height = height;
    this.headImg = headImg;
    this.bodyImgs = bodyImgs;
    this.bodies = [
      { x: 2, y: 1, type: 1 },
      { x: 1, y: 1, type: 0 },
      { x: 0, y: 1, type: 0 },
    ];
    this.snakeMap = snakeMap;
  }

  render() {
    let oSnakes = document.querySelectorAll(".snake");

    for (let i = oSnakes.length - 1; i > -1; i--) {
      let oDiv = oSnakes[i];
      oDiv.parentNode.removeChild(oDiv);
    }

    for (let value of this.bodies) {
      let oSnake = document.createElement("div");
      oSnake.className = "snake";

      oSnake.style.width = this.width + "px";
      oSnake.style.height = this.height + "px";

      if (value.type) {
        oSnake.style.background = `url(${this.headImg})`;
      } else {
        oSnake.style.background = `url(${this.bodyImgs})`;
      }
      oSnake.style.position = "absolute";
      oSnake.style.top = value.y * this.height + "px";
      oSnake.style.left = value.x * this.width + "px";
      this.snakeMap.oMap.appendChild(oSnake);
    }
  }

  move(keyCode) {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      this.bodies[i].x = this.bodies[i - 1].x;
      this.bodies[i].y = this.bodies[i - 1].y;
      this.bodies[i].type = 0;
    }

    switch (keyCode) {
      case 37:
        this.bodies[0].x -= 1;
        break; //left
      case 38:
        this.bodies[0].y -= 1;
        break; //up
      case 39:
        this.bodies[0].x += 1;
        break; //right
      case 40:
        this.bodies[0].y += 1;
        break; //down
      default:
        break;
    }

    this.render();
  }
}
