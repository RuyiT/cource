import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util.js'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history', //默认Hash模式带#号
  routes: routes
})

const HAS_LOGINED = true

//路由前置守卫
router.beforeEach((to, from, next) => { 
	to.meta && to.meta.title && setTitle(to.meta.title)
	if(to.name !== 'login') { //判断是否时登陆页面
		if(HAS_LOGINED) next() //判断是否已经登陆，已经登陆直接跳转
		else next({ name: 'login'}) //没有登陆的话跳转到登陆页面
	} else {
		if (HAS_LOGINED) next({ name: 'Home'}) //跳转的是登陆页面的话，如果已经登陆跳转到Home页
		else next()
	}
})

//在导航被确认之前，所有组件内守卫和异步路由组件解析之后调用
// router.beforeResolve((to, from, next) => {})

//路由后置守卫
//不能阻止页面跳转
router.afterEach((to, form) => {
	//logining = false
})

/**
 * 完整的路由解析流程
 * 1. 导航被触发
 * 2. 在失活的组件 (即将离开的组件) 里调用离开守卫 beforeRouteLeave (home)
 * 3. 调用全局的前置守卫 beforeEach (./)
 * 4. 在重用的组件里调用 beforeRouteUpdate (argu)
 * 5. 调用路由独享的守卫 beforeEnter (./router.js)
 * 6. 解析异步路由组件
 * 7. 在被激活的组件 (即将进入的页面组件) 里调用 beforeRouteEnter (home)
 * 8. 调用全局的解析守卫 beforeResolve (./)
 * 9. 导航被确认
 * 10. 调用全局的后置守卫afterEach
 * 11. 触发DOM更新
 * 12. 用创建号的实列调用beforeRouteEnter守卫传给next的回调函数
 */
export default router
