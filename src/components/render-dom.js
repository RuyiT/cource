// render函数式组件 , 只是传入一些数据，不作任何响应,没有生命周期函数
export default {
	functional: true, // 这个值为true时，表示它时没有状态，没有实例的组件
	props: {
		number: Number,
		renderFunc: Function,
	},
	render: (h, ctx) => { // h参数为render的h渲染方法，ctx为当前对象（实例）
		return  ctx.props.renderFunc(h, ctx.props.number)
	}
}