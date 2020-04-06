import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Home from '../components/Home' //使用路由懒加载代替原来的一次性全部加载
// import About from '../components/About'
// import User from '../components/User'

const Home = ()=> import('../components/Home');
const About = () => import('../components/About');

// 通过Vue.use(插件)， 安装插件
Vue.use(Router)

// 配置路由跟组件之间的应用关系
const routes = [
     {
        path: '/',
        redirect: '/home'
      },
      {
      	path: '/home',
      	component: Home,
      	meta: {
      		title: '首页'
      	},
      	name: 'Home',
      	children: [
      		{
      			path: '',
      			redirect: '/home/news'
      		},
      		{
      			path: 'news', // 子组件是不需要加\的
      			component: ()=> import('../components/HomeNews')
      		},
      		{
      			path: 'msg',
      			component: () => import('../components/HomeMsg')
      		}
      	]
      },
      {
      	path: '/about',
      	component: About,
      	name: 'About',
      	meta: {
      		title: '关于'
      	}
      },
      {
      	path:'/user/:userId',
      	component:()=> import('../components/User'), // 懒加载
      	name: 'User',
      	meta: {
      		title: '用户'
      	}
      },
      {
      	path: '/profile',
      	component: () => import('../components/Profile'),
      	name: 'Profile',
      	meta: {
      		title: '档案'
      	}
      }
    ];

// 创建VueRouter对象
const router = new Router({	
  routes,
  mode: 'history'
})

//路由全局守卫
//前置守卫（guard）
router.beforeEach((to, from, next)=>{
	//document.title = to.meta.title; 这样写/home/news会没有title，我们需要从matched里面拿数据
	document.title = to.matched[0].meta.title;
	//console.log(to);
	next(); // 这个必须调用
});

//router.afterEach((to, from) => {})后置钩子
router.afterEach((to, from) => {
	console.log('后置钩子');
});

export default router;
