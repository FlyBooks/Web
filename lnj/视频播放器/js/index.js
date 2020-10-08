window.onload = function () {
  let oVideo = document.querySelector("video");
  let oFigure = document.querySelector("figure");
  let totalTime = document.querySelector(".total-time"); //视频总时长
  let playTime = document.querySelector(".play-time");
  let oPlay = document.querySelector("#play");
  let processBar = document.querySelector("#process");
  let currentBar = document.querySelector("#line");
  let fullScreen = document.querySelector("#magnify");
  let flag = false; //默认是不播放的;

  //监听视频是否加载完毕
  oVideo.oncanplay = function () {
    oFigure.style.backgroundImage = "none";
    oVideo.style.display = "block";
    let obj = getTime(oVideo.duration);
    totalTime.innerText = `${obj.hour}:${obj.mins}:${obj.seconds}`;
  };

  oVideo.ontimeupdate = function () {
    let currentTime = oVideo.currentTime;
    let obj = getTime(currentTime);
    playTime.innerText = `${obj.hour}:${obj.mins}:${obj.seconds}`;

    //设置进度条的进度
    let currentLength =
      (currentTime / oVideo.duration) * processBar.offsetWidth;

    currentBar.style.width = currentLength + "px";
  };

  //点击进度条,实现快进
  processBar.onclick = function (event) {
    event = event || window.event;

    currentBar.style.width = event.offsetX + "px";
    oVideo.currentTime =
      (event.offsetX / processBar.offsetWidth) * oVideo.duration;
  };

  //监听视频是否播放完毕
  oVideo.onended = function () {
    flag = false;
    oPlay.className = "iconfont icon-bofang";
    playTime.innerText = "00:00:00";
    currentBar.style.width = "0px";
    oVideo.currentTime = 0;
  };

  oPlay.onclick = function () {
    if (flag) {
      flag = false;
      oPlay.className = "iconfont icon-bofang";
      oVideo.pause();
    } else {
      flag = true;
      oPlay.className = "iconfont icon-zanting";
      oVideo.play();
    }
  };

  //实现全屏
  fullScreen.onclick = function () {
    toFullVideo(oVideo);
  };
};

function getTime(time) {
  let hour = Math.floor(time / 3600);
  let mins = Math.floor((time - hour * 3600) / 60);
  let seconds = Math.floor(time - hour * 3600 - mins * 60);
  hour = hour > 10 ? hour : "0" + hour;
  mins = mins > 10 ? mins : "0" + mins;
  seconds = seconds > 10 ? seconds : "0" + seconds;
  return {
    hour,
    mins,
    seconds,
  };
}

function toFullVideo(videoDom) {
  if (videoDom.requestFullscreen) {
    return videoDom.requestFullscreen();
  } else if (videoDom.webkitRequestFullScreen) {
    return videoDom.webkitRequestFullScreen();
  } else if (videoDom.mozRequestFullScreen) {
    return videoDom.mozRequestFullScreen();
  } else {
    return videoDom.msRequestFullscreen();
  }
}
