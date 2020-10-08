let items = [];
window.onload = function () {
  let oContainer = document.querySelector(".main");

  initialImgs(oContainer);
};

function initialImgs(oContainer) {
  for (let i = 1; i <= 40; i++) {
    let oDiv = document.createElement("div");
    oDiv.classList.add("box");
    oContainer.appendChild(oDiv);

    let index = i < 10 ? "0" + i : i;
    let url = `./images/img${index}.jpg`;

    preLoad(url, function (oImg) {
      oDiv.appendChild(oImg);
      items.push(oDiv);
    });
  }
}

function preLoad(url, fn) {
  let oImg = document.createElement("img");
  let oContainer = document.querySelector(".main");
  oImg.src = url;

  oImg.onload = function () {
    fn(oImg);

    if (items.length === 40) {
      let oItems = document.querySelectorAll(".box");
      let column = resize(oContainer, oItems);
      waterFall(column, oItems);
      window.onresize = throttle(function () {
        let columnResize = resize(oContainer, oItems);
        waterFall(columnResize, oItems);
      });
    }
  };
}

function resize(oContainer, oItems) {
  const { width } = getScreen();

  let itemWidth = oItems[0].offsetWidth;
  let column = Math.floor(width / itemWidth);

  let contaninerWidth = column * itemWidth;
  oContainer.style.width = contaninerWidth + "px";
  oContainer.style.margin = "0 auto";

  return column;
}

function waterFall(column, oItems) {
  let firstLineHeight = [];

  for (let i = 0; i < oItems.length; i++) {
    let item = oItems[i];

    if (i < column) {
      item.style.position = "";
      firstLineHeight.push(item.offsetHeight);
    } else {
      let minOffsetHeight = Math.min.apply(this, firstLineHeight);
      let minIndex = firstLineHeight.findIndex(function (value) {
        return minOffsetHeight === value;
      });
      item.style.position = "absolute";
      item.style.top = minOffsetHeight + "px";

      item.style.left = oItems[minIndex].offsetLeft + "px";
      firstLineHeight[minIndex] += item.offsetHeight;
    }
  }
}
