import vue from 'vue'
import MessageBox from '@/components/message-box/message-box.vue'

// 声明扩展实列构造器
const MessageBoxConstructor = vue.extend(MessageBox)

// 用于触发Action时保存Promise
let currentAction = null

// 定义弹出组件的函数 接收两个参数， 要显示的文本 和 时间
/**
 * @param {String} title 提示框标题
 * @param {String} content 提示框内容
 * @param {String} type 提示类型
 * @param {showCancelButton} Boolean 是否显示取消按钮
 * @param {confirmButtonText} String 确认按钮文字
 * @param {cancelButtonText} String 取消按钮文字
 * @param {function} success 成功回调
 * @param {function} fail 失败回调
 * @return {promise} 返回promise ，根据action 的值为confirm 和 cancel 处理回调
 */

 function showMessageBox(options = {}) {
	MessageBoxConstructor.prototype.callback = defaultCallBack
	const MessageBoxOptions = Object.assign({ show: true, success: true, showContent: true, showCancelButton: false }, options)
	const MessageBoxDom = new MessageBoxConstructor({
		el: document.createElement('div'),
		data() {
			return MessageBoxOptions
		}
	})

	// 把实列化的 message.vue 添加到body里
	document.body.appendChild(MessageBoxDom.$el)

	return new Promise((resolve, reject) => {
		// 使用变量保存两个参数，后边调用
		currentAction = { resolve, reject }
	})
 }

 // 注册为全局组件的函数
 function registryMessageBox() {
		// 将组件注册到 vue 的 原形链里去，
		// 这样就可以在所以 vue 的实例里面使用 this.$message()
		vue.prototype.$message = showMessageBox
 }
 
 // 回调函数
 function defaultCallBack (action) {
		if(!action) currentAction.resolve('cancel')
		currentAction.resolve('confirm')
 }
 export default registryMessageBox
 