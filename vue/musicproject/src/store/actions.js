export default {
  setIsFullpagePlay({ commit }, flag) {
    commit("setIsFullpagePlay", flag);
  },
  setIsMiniPlayer({ commit }, flag) {
    commit("setIsMiniPlayer", flag);
  },
  setIsPlaying({ commit }, flag) {
    commit("setIsPlaying", flag);
  },
  setModeType({ commit }, value) {
    commit("setModeType", value);
  },
  setIsShowListPlayer({ commit }, value) {
    commit("setIsShowListPlayer", value);
  },
};
