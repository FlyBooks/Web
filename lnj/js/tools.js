(function () {
  function getPageScroll() {
    let x, y;
    if (window.pageXOffset) {
      x = window.pageXOffset;
      y = window.pageYOffset;
    } else if (document.compatMode === "BackCompat") {
      x = document.body.scrollLeft;
      y = document.body.scrollTop;
    } else {
      x = document.documentElement.scrollLeft;
      y = document.documentElement.scrollTop;
    }
    return { x, y };
  }

  function getScreen() {
    let width, height;
    if (window.innerHeight) {
      width = window.innerWidth;
      height = window.innerHeight;
    } else if (document.compatMode === "BackCompat") {
      width = document.body.clientWidth;
      height = document.body.clientHeight;
    } else {
      width = document.documentElement.clientWidth;
      height = document.documentElement.clientHeight;
    }

    return {
      width,
      height,
    };
  }

  window.getPageScroll = getPageScroll;
  window.getScreen = getScreen;
})();
