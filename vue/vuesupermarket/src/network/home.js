/* eslint-disable */
import { request, request2 } from './request';

export function getHomeMultidata() {
	return request({
		url: "/home/multidata"
	});
}

export function getHomeGoods(type, page) {
	return request({
		url: '/home/data',
		params: {
			type,
			page
		}
	});

}

export function testPost() {
	return request2({
		url: '/post',
		method: 'post'
	});
}
