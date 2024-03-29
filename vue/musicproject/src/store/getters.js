export default {
  isFullpagePlay(state) {
    return state.isFullpagePlay;
  },
  isPlaying(state) {
    return state.isPlaying;
  },
  modeType(state) {
    return state.modeType;
  },
  isShowListPlayer(state) {
    return state.isShowListPlayer;
  },
  currentSong(state) {
    if (Object.keys(state.songs).length === 0) {
      return {
        name: "",
        artist: "",
        picUrl: null,
        id: "",
      };
    }
    return state.songs[state.currentIndex];
  },
  currentLyric(state) {
    return state.currentLyric;
  },
  songs(state) {
    return state.songs;
  },
  currentIndex(state) {
    return state.currentIndex;
  },
  curTime(state) {
    return state.curTime;
  },
  favSongs(state) {
    return state.favSongs;
  },
  historySongs(state) {
    return state.historySongs;
  },
  themes(state) {
    return state.themes[state.themeIndex];
  },
  themeIndex(state) {
    return state.themeIndex;
  },
};
