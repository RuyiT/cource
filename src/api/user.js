import axios from './index'
export const getUserInfo = ({userId}) => {
	return axios.request({
		url: 'http://localhost:3000/getUserInfo',
		method: 'post',
		data: {
			userId
		}
	})
}