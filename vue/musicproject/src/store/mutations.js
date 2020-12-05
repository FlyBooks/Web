export default {
  setIsFullpagePlay(state, flag) {
    state.isFullpagePlay = flag;
  },
  setIsMiniPlayer(state, flag) {
    state.isMiniPlayer = flag;
  },
  setIsPlaying(state, flag) {
    state.isPlaying = flag;
  },
  setModeType(state, value) {
    state.modeType = value;
  },
  setIsShowListPlayer(state, value) {
    state.isShowListPlayer = value;
  },
  setSongs(state, list) {
    state.songs = list;
  },
  setLyric(state, lyric) {
    state.currentLyric = lyric;
  },
};
