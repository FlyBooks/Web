import modeType from "./modeType.js";
export default {
  isFullpagePlay: false,
  isMiniPlayer: false,
  isShowListPlayer: false,
  isPlaying: true,
  modeType: modeType.loop,
  songs: [],
  currentIndex: 0,
  currentLyric: {},
  curTime: 0,
  favSongs: [],
  historySongs: [],
  themes: ["color1", "color2", "color3"],
  themeIndex: 0,
};
