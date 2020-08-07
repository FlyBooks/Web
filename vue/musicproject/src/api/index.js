import { request } from "./network.js";

export function getBanners() {
  return request({
    url: "/banner?type=2",
  });
}

export function getRecommendSongs() {
  return request({
    url: "/personalized?limit=6",
  });
}

export function getLatestAlbum() {
  return request({
    url: "/album/newest",
  });
}
