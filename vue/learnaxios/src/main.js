import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {request1} from './network/request'
Vue.config.productionTip = false;

//console.log(request1, 'require');
//回调函数的形式
//request1(
//		{
//		  url: '/api/v1/components/accessgroups',
//	  params: {
//			  limit: 25
//		  }
//	  },
//	(res)=>{ console.log('request success', res); },
//	(err) =>{ console.log(err);}
//);

console.log(123);
request1(
		{
		  url: '/api/v1/components/accessgroups',
	  params: {
			  limit: 25
		  }
	  }
).then(
  res => {
  	console.log(res);
  }		
).catch(err => console.log(err));

//axios({
//	url: 'https://service-inventory.gmp-k8s-test.wdf.sap.corp/api/v1/components/accessgroups?limit=25'
//}).then(
//res => {console.log('old', res)}		
//);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*
 * axios默认的是get请求
 */

// 设置公共配置信息：
/*
 * axios.defaults.baseURL = 'http://123.207.32.32:8000'; axios.defaults.timeout =
 * 5000;
 * 
 * axios({ url: '/home/multidata', //https://httpbin.org/get methods: 'get'
 * }).then( (res) => { console.log(res); });
 * 
 * axios({ url: '/home/data' }).then(res => { console.log(res); })
 * 
 * //axios的并发请求 axios.all([ axios({ url: '/home/multidata' }), axios({ url:
 * '/home/data', params: { type: 'sell', page: 1 } }) ]).then(results => {
 * console.log(results); }) //. then(axious.spread((res1, res2) => { }))
 * 
 * //创建对应的axios实例 const instance1 = axios.create({ baseURL:
 * 'https://service-inventory.gmp-k8s-test.wdf.sap.corp', timeout: 5000 })
 * 
 * instance1({ url: '/api/v1/components/accessgroups', params : { limit: 25 }
 * }).then(res => { console.log(res); });
 */






