import { request } from "./network.js";

export function getHotComments() {
  return request({
    url: "/banner?type=2",
  });
}
