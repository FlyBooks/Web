import { getSongsDetail, getLyric, getVideoUrl } from "../api";
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
  async setSongsDetail({ commit }, ids) {
    const res = await getSongsDetail(ids.join(","));
    const musicUrl = await getVideoUrl(ids.join(","));
    const list = [];

    res.data.songs.forEach((value, index) => {
      const song = {
        name: value.name,
        picUrl: value.al.picUrl,
      };

      song.url = musicUrl.data.data[index].url;
      const artist = value.ar.reduce((oldValue, newValue) => {
        return oldValue ? oldValue + " " + newValue.name : newValue.name;
      }, "");

      song.artist = artist;
      song.id = value.id;
      list.push(song);
    });

    commit("setSongs", list);
  },
  async setCurrentLyric({ commit }, id) {
    const res = await getLyric(id);

    if (res.data.nolyric || res.data.uncollected) {
      commit("setLyric", { 0: "no lyric" });
    } else {
      const newLyric = parseLyric(res.data.lrc.lyric);
      commit("setLyric", newLyric);
    }
  },
  delSongs({ commit }, index) {
    commit("delSongs", index);
  },
};

function parseLyric(lyric) {
  let lyrics = lyric.split("\n");
  const reg1 = /\[\d+:\d+\.\d+\]/;
  const reg2 = /\[\d+/;
  const reg3 = /:\d+/;
  const newLyric = {};
  lyrics.forEach((value) => {
    let time = value.match(reg1);
    if (!time) {
      return;
    }
    //get minute
    const minute = parseInt(time[0].match(reg2)[0].substr(1));

    //get second
    const second = parseInt(time[0].match(reg3)[0].substr(1));
    const key = minute * 60 + second;

    const text = value.replace(time, "");
    newLyric[key] = text;
  });

  return newLyric;
}
