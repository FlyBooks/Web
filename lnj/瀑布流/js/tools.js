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

  function debounce(fn, delay = 1000) {
    let timerId = null;

    return function (...args) {
      timerId && clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }

  function throttle(fn, delay = 1000) {
    let flag = true;
    let timer = null;

    return function () {
      if (!flag) {
        return;
      }
      flag = false;
      timer && clearTimeout(timer);
      timer = setTimeout((...args) => {
        fn.apply(this, args);
        flag = true;
      }, delay);
    };
  }

  window.getPageScroll = getPageScroll;
  window.getScreen = getScreen;
  window.debounce = debounce;
  window.throttle = throttle;
})();
