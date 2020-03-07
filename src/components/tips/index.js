import vue from 'vue'
import Tips from './tips.vue'

const TipsConstructor = vue.extend(Tips)

function showTips(options) {
	const TipsOptions = Object.assign({ show: true, success: true, duration: 2000, showContent: true }, options)
	const TipsDom = new TipsConstructor({
		el: document.createElement('div'),
		data() {
			return TipsOptions
		}
	})

	document.body.appendChild(TipsDom.$el)

	setTimeout(() => { TipsDom.showContent = false}, TipsOptions.duration - 1000)

	setTimeout(() => {TipsDom.show = false}, TipsOptions.duration )
}

function registryTips() {
	vue.prototype.$tips = showTips
}

export default registryTips