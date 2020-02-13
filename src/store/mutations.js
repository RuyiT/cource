import vue from 'vue'

const mutations = {
	SET_APP_NAME (state, params) {
		state.appName = params.appName
	},
	SET_APP_VERSION (state) {
		// vue的set方法，原本state没有appVersion这个属性时，用set方法添加appVersion的响应式视图更新
		vue.set(state, 'appVersion', 'v2.0')
	},
	SET_STATE_VALUE (state, value) {
		state.stateValue = value
	}
}
export default mutations