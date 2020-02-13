import { getAppName } from '@/api/api.js'
const actions = {
	// updateAppName ({ commit }) {
	// 	getAppName().then(res => {
	// 		const { info: { appName }} = res
	// 		commit('SET_APP_NAME', {appName})
	// 	}).catch(err => {
	// 		console.log(err)
	// 	})
	// }
	// updateAppName (paramsObj) {
	// 	const commit = paramsObj.commit // {commit}为es6简写
	// }

	async updateAppName({ commit }) {
		try {
			const { info: { appName } } = await getAppName()
			commit('SET_APP_NAME', { appName})
		} catch (err) {
			console.log(err)
		}
		
	}
}
export default actions
