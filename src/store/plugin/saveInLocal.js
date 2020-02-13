// store的持久化插件
export default store => {
	console.log('state初始化了')
	if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
	// subscribe函数 是当每次提交mutations之后， 都会执行里面的回调函数
	store.subscribe((mutation, state) => {
		console.log('提交mutations了')
		localStorage.state = JSON.stringify(state)
	})
}