import { request } from "./network.js";
import axiosInstance from "./service.js";

//可获取 banner( 轮播图 ) 数据
export function getBanners() {
  return request({
    url: "/banner",
    params: {
      type: 2,
    },
  });
}

//推荐歌单
export function getRecommendSongs() {
  return request({
    url: "/personalized?limit=6",
  });
}

//最新专辑
export function getLatestAlbum() {
  return request({
    url: "/album/newest",
  });
}

//推荐新音乐
export function getNewSong() {
  return request({
    url: "/personalized/newsong",
  });
}

//获取歌单详情
export function getNewSongDetail(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}

//获取专辑内容
export function getAlbumContent(id) {
  return request({
    url: "/album",
    params: {
      id,
    },
  });
}

//获取歌曲信息
export function getSongsDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids,
    },
  });
}

//获取歌词
export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id,
    },
  });
}

//get song video
export function getVideoUrl(id) {
  return request({
    url: "/song/url",
    params: {
      id,
    },
  });
}

//get hot artists
export function getHotArtists() {
  return new Promise((resolve, reject) => {
    request({
      url: "/top/artists",
      params: {
        offset: 0,
        limit: 5,
      },
    })
      .then((res) => {
        resolve(res.data.artists);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getArtistsByLetter(letter) {
  const letterFn = [];

  for (let value of [7, 96, 8]) {
    letterFn.push(
      request({
        url: "artist/list",
        params: {
          type: -1,
          area: value,
          initial: letter,
          offset: 0,
          limit: 5,
        },
      })
    );
  }
  return Promise.all(letterFn);
}

export async function getArtistsByAllLetters() {
  const allArtists = [];
  const hotArtists = await getHotArtists();
  allArtists.push({ key: "HOT", list: hotArtists });
  for (let i = 65; i < 91; i++) {
    let list = [];
    let letter = String.fromCharCode(i);
    let res = await getArtistsByLetter(letter);
    res.forEach((value) => {
      list.push(...value.data.artists);
    });
    allArtists.push({ key: letter, list });
  }

  return allArtists;
}

export function getSingerInfo(id) {
  return request({
    url: "/artists",
    params: {
      id,
    },
  });
}
