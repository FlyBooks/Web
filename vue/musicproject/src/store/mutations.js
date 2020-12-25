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
    if (index < state.currentIndex) {
      state.currentIndex--;
    }
    if (state.songs.length === 0) {
      this.state.isFullpagePlay = false;
      this.state.isMiniPlayer = false;
      this.state.isShowListPlayer = false;
      this.isPlaying = false;
    }
  },
  setcurrentIndex(state, index) {
    if (index < 0) {
      index = state.songs.length - 1;
    } else if (index > state.songs.length - 1) {
      index = 0;
    }
    state.currentIndex = index;
  },
  setCurTime(state, time) {
    state.curTime = time;
  },
  setFavSongs(state, song) {
    let isExist = state.favSongs.findIndex((value) => {
      return song.id === value.id;
    });

    if (isExist === -1) {
      state.favSongs.push(song);
    } else {
      state.favSongs.splice(isExist, 1);
    }
  },
  setFavSongList(state, list) {
    state.favSongs = list;
  },
  setHistorySong(state, hisSong) {
    const isExist = state.historySongs.findIndex((value) => {
      return value.id === hisSong.id;
    });

    if (isExist === -1) {
      if (state.historySongs.length > 30) {
        state.historySongs.splice(0, 1);
      }
      state.historySongs.push(hisSong);
    }
  },
  setHistorySongList(state, list) {
    state.historySongs = list;
  },
  setthemeIndex(state, index) {
    if (index >= state.themes.length) {
      index = 0;
    }
    state.themeIndex = index;
  },
};
