//放一些与业务无关的方法

export const doCustomTimes = (times,callback) => {
	let i = -1
	while (++i < times ) {
		callback()
	}
}