import Home from '@/views/Home.vue'
export default [
	{
		path: '/',
		name: 'Home',
		alias: 'home_page', //别名路径，输入这个路径也是home
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route 打包的时候生成一个具名的文件
		// which is lazy-loaded when the route is visited. 起懒加载的作用
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/argu/:name', //动态路由
		name: 'argu',
		component: () => import('@/views/argu.vue')
	},
	{
		path: '/parent', //嵌套路由
		name: 'parent',
		component: () => import('@/views/parent.vue'),
		children: [
			{
				path: 'child',
				component: () => import('@/views/child.vue')
			}
		]
	},
	{
		path: '/named_view', //命名视图
		components: {
				default: () => import('@/views/child.vue'), //没有命名的默认加载default组件
				emali: () => import('@/views/emali.vue'),
				tel: () => import('@/views/tel.vue')
		}
	},
	{
		path: '*', //路由重定向
		// redirect: '/'
		// redirect: {
		// 	name: 'Home'
		// }
		redirect: to => {
			//可以写一些判断逻辑
			//然后return
			// return '/'
			return {
				name: 'Home'
			}
		}
	}
]
