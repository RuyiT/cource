import Home from '@/views/Home.vue'
import Layout from '@/views/layout.vue'
export default [
	{
		path: '/',
		name: 'Home',
		// alias: 'home_page', //别名路径，输入这个路径也是home
		component: Layout,
		// props: route => ({ //函数模式路由传参
		// 	food: route.query.food //这是一个对象，也可以用函数模式返回对象
		// }),
		// beforeEnter: (to, form, next) => { //路由内独享守卫
		// 	//写些判断逻辑
		// 	next()
		// }
		children: [
			{
				path: 'Home',
				component: Home
			}
		]
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route 打包的时候生成一个具名的文件
		// which is lazy-loaded when the route is visited. 起懒加载的作用
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
		props: { //2.普通路由传参，对象模式
			food: 'banana'
		},
		meta: { // 路由原信息, 做一些权限处理
			title: '关于'
		}
	},
	{
		path: '/argu/:name', //动态路由
		name: 'argu',
		component: () => import('@/views/argu.vue'),
		props: true //1.动态路由传参
		
	},
	{
		path: '/count-to', // 记数组件
		name: 'count_to',
		component: () => import('@/views/count-to.vue')	
	},
	{
    path: '/', // 可编辑表格
    name: 'table', 
    component: Layout,
    children: [
      {
        path: 'table',
        component: () => import('@/views/table.vue')
      }
    ]
  },
	{
		path: '/lab', // 调试组件
		name: 'lab',
		component: () => import('@/views/lab/lab.vue')	
	},
	{
		path: '/split-pane', // div分割组件
		name: 'split_pane',
		component: () => import('@/views/split-pane.vue')	
	},
	{
		path: '/render-page', // render组件
		name: 'render_page',
		component: () => import('@/views/render-page.vue')	
	},
	{
		path: '/menu-page', // 递归组件
		name: 'menu-page',
		component: () => import('@/views/menu-page.vue')	
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login.vue')
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
		path: '/main', //路由重定向
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
	},
	{
		path: '/store',
		component: () => import('@/views/store.vue')
	},
	{
		path: '*',
		component: () => import('@/views/error_404.vue')
	}
]
