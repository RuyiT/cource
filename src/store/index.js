import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import getters from './getters'

Vue.use(Vuex)
//vuex-1,state&&getter
//vuex-2,mutation&action&moudle
//vuex-3进阶 插件&严格模式&vuex+双向绑定

export default new Vuex.Store({
  state,
	mutations,
	getters,
  actions,
  modules: {
		user
  }
})
