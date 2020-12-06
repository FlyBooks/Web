export default {
  setIsFullpagePlay(state, flag) {
    state.isFullpagePlay = flag;
    if (flag) {
      state.isMiniPlayer = false;
      state.isShowListPlayer = false;
    }
  },
  setIsMiniPlayer(state, flag) {
    state.isMiniPlayer = flag;
    if (flag) {
      state.isFullpagePlay = false;
      state.isShowListPlayer = false;
    }
  },
  setIsShowListPlayer(state, flag) {
    state.isShowListPlayer = flag;
    if (flag) {
      state.isFullpagePlay = false;
      state.isMiniPlayer = false;
    }
  },
  setIsPlaying(state, flag) {
    state.isPlaying = flag;
  },
  setModeType(state, value) {
    state.modeType = value;
  },
  setSongs(state, list) {
    state.songs = list;
  },
  setLyric(state, lyric) {
    state.currentLyric = lyric;
  },
  delSongs(state, index) {
    if (index !== undefined) {
      state.songs.splice(index, 1);
    } else {
      state.songs.splice(0);
    }

    if (state.songs.length === 0) {
      this.state.isFullpagePlay = false;
      this.state.isMiniPlayer = false;
      this.state.isShowListPlayer = false;
    }
  },
};
