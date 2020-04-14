import axios from 'axios';

export function request1(config, success, failure){
	return new Promise(function(resolve, reject) { 
		// 1. 创建axios的实例
		const instance1 = axios.create({
			baseURL: 'https://service-inventory.gmp-k8s-test.wdf.sap.corp',
			timeout: 5000
		});
		
		//2.axios的拦截器
		instance1.interceptors.request.use(
				config => {
					return config;
				},
				err => {
					//console.log(err); 当return config之后，这里打印的err就会是undefined
				}
				);
		//响应拦截
		instance1.interceptors.response.use(function(res){
			console.log(res, 'res');
		}, function(err){console.log(err);});
		
		//3.发送真正的网络请求
		instance1(config)
		.then((res) => {
			resolve(res);
		})
		.catch(err => reject(err));
	});
};
