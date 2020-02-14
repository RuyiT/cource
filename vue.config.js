const path = require('path') //引入node的path模块

const resolve = dir => {
	return path.join(__dirname, dir)
} //定义resolve方法用来加载路径

const BASE_URL = process.env.NODE_ENV === 'procution' ? '/' : '/'
module.exports = {
	lintOnSave: false,
	publicPath: BASE_URL, //项目的基本路径
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('_c', resolve('src/components')) //简写路径
	},
	productionSourceMap: false, //打包时不生程.map文件
	devServer: {
		'^/api': '/api/',
		proxy: 'http://localhost:3000' //需要代理的地址
	}
}
