//放一些与业务有关的方法

import Cookies from 'js-cookie'

export const setTitle = (title) => {
	window.document.title = title || 'admin'
}
export const setToken = (token , tokenName = 'token') => {
	Cookies.set(tokenName, token)
}
export const getToken = (tokenName = 'token') => {
	return Cookies.get(tokenName)
}
export const removeToken = (token) => {
	return Cookies.remove(token)
}