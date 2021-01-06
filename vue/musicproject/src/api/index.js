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

export function getTopLists() {
  return new Promise((resolve, reject) => {
    request({
      url: "toplist/detail",
    })
      .then((res) => {
        const category = {
          officialList: [
            { id: 19723756 },
            { id: 3779629 },
            { id: 2884035 },
            { id: 3778678 },
          ],
          recList: [
            { id: 991319590 },
            { id: 1978921795 },
            { id: 2809577409 },
            { id: 2250011882 },
            { id: 71385702 },
            { id: 71384707 },
          ],
          globalList: [
            { id: 60198 },
            { id: 180106 },
            { id: 3812895 },
            { id: 60131 },
            { id: 11641012 },
            { id: 2023401535 },
          ],
          otherList: [
            { id: 21845217 },
            { id: 27135204 },
            { id: 3112516681 },
            { id: 745956260 },
            { id: 5338990334 },
            { id: 2809513713 },
          ],
          titles: {
            officialList: "官方榜",
            recList: "推荐榜",
            globalList: "全球榜",
            otherList: "更多榜单",
          },
        };

        for (let key in category) {
          for (let i = 0; i < category[key].length; i++) {
            for (let j = 0; j < res.data.list.length; j++) {
              if (res.data.list[j].id === category[key][i].id) {
                category[key][i].name = res.data.list[j].name;
                category[key][i].rank = res.data.list[j];
                break;
              }
            }
          }
        }

        resolve(category);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getRankDetail(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}

export function getSearchList(keywords) {
  return request({
    url: "/search",
    params: {
      keywords,
    },
  });
}

export function getHotSearch(){
  return request({
    url:"/search/hot"
  });
}
