const state = {
	userName: 'ruyi'
}
const getters = {
	firstLetter: (state) => {
		return state.userName.substr(0,1)
	}
}
const mutations = {
	SET_USER_NAME (state, params) {
		state.userName = params
	}
}
const actions = {
	updateUserName ({commit, state, rootState, dispatch}) {
		/**
		 * cmmit: 用来提交一个mutation
		 * state: 当前模块的state
		 * rootState: 根模块的state，比如rootState.appName
		 * dispatch: 调用当前模块下的actions里面其他的函数
		 */
	}
}
export default {
	// namespaced: true,// 命名空间，里面的名字不受外界干扰，更加密闭
	state,mutations,actions,getters,
	modules: {
		// 这里还可以注册模块， 如果用了命名空间，则用 user/模块名 来获取这里的模块
	}
}