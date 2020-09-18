(function () {
  function slowMove(el, obj) {
    for (let attr in obj) {
      let position = parseFloat(getComputedStyle(el)[attr]) || 0;
      let step;
      let target = obj[attr];

      let timer = setInterval(function () {
        step = (target - position) * 0.3;
        position += step;

        if (Math.abs(position - target) < 1) {
          clearInterval(timer);
          el.style[attr] = target + "px";
          return;
        }

        el.style[attr] = position + "px";
      }, 200);
    }
  }

  function slowMove2(el, obj, fn) {
    el.timer && clearInterval(el.timer);

    let flag = true;
    el.timer = setInterval(function () {
      for (let attr in obj) {
        let target = obj[attr];
        let offset = parseFloat(getComputedStyle(el)[attr]) || 0;
        let step = (target - offset) * 0.3;
        offset += step;
        if (Math.abs(target - offset) <= 1) {
          el.style[attr] = target + "px";
          console.log(target, "target");
          flag = true;
        } else {
          el.style[attr] = offset + "px";
          flag = false;
        }
      }
      if (flag) {
        clearInterval(el.timer);
        fn && fn();
      }
      console.log(flag, "flag");
    }, 200);
  }

  function linearMove(el, obj, fn) {
    let flag = true;
    el.timer && clearInterval(el.timer);
    el.timer = setInterval(function () {
      for (let attr in obj) {
        let target = obj[attr];
        let offset = parseFloat(getComputedStyle(el)[attr]) || 0;
        let step = target - offset > 0 ? 13 : -13;

        offset += step;

        if (Math.abs(target - offset) <= Math.abs(step)) {
          el.style[attr] = target + "px";
          flag = true;
        } else {
          el.style[attr] = offset + "px";
          flag = false;
        }
      }

      if (flag) {
        clearInterval(el.timer);
        fn && fn();
      }
    }, 200);
  }
  window.slowMove = slowMove;
  window.slowMove2 = slowMove2;
  window.linearMove = linearMove;
})();
