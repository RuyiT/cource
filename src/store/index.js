import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import getters from './getters'
import saveInLocal from './plugin/saveInLocal'

Vue.use(Vuex)
//vuex-1,state&&getter
//vuex-2,mutation&action&moudle
//vuex-3进阶 插件&严格模式&vuex+双向绑定

export default new Vuex.Store({
	strict: process.env.NODE_ENV === 'development', // 如果是开发环境就报错
	// strict: true, // vuex的严格模式，如果直接修改state里面的值会报错
  state,
	mutations,
	getters,
  actions,
  modules: {
		user
	},
	plugins: [saveInLocal]
})
