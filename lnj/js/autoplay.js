(function () {
  let timer = null;
  function slowMove(el, target) {
    let position = parseInt(el.style.marginLeft) || 0;
    let step;
    timer && clearInterval(timer);
    timer = setInterval(function () {
      step = (target - position) * 0.3;
      position += step;
      if (Math.abs(position - target) < 1) {
        clearInterval(timer);
        el.style.marginLeft = target + "px";
        return;
      }

      el.style.marginLeft = position + "px";
    }, 200);
  }
  window.slowMove = slowMove;
})();
