export const getRandomNumber = (min, max) => {
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const formatTime = (time) => {
  let minutes = parseInt(time / 60);
  minutes = minutes >= 10 ? minutes : "0" + minutes;
  let seconds = parseInt(time - minutes * 60);
  seconds = seconds >= 10 ? seconds : "0" + seconds;

  return {
    minutes,
    seconds,
  };
};

export const setLocalStorage = (key, value) => {
  return window.localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  return JSON.parse(window.localStorage.getItem(key));
};
