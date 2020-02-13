const state = {
	userName: 'ruyi'
}
const getters = {
	firstLetter: (state) => {
		return state.userName.substr(0,1)
	}
}
const mutation = {
	//
}
const action = {
	//
}
export default {
	// namespaced: true,// 命名空间，里面的名字不受外界干扰，更加密闭
	state,mutation,action,getters
}