<template>
<div>
	<list :list="list" :style="{color: 'red'}" :render="renderFunc">
		<count-to slot="aa" slot-scope="count" :end-val="count.number">这个count对象通过slot-scope接收:number传过来的对象</count-to> 
	</list>
</div>
</template>

<script>
import List from '_c/list'
import CountTo from '_c/count-to'
export default {
	name: '',
	components: {
		List,
		CountTo // 作用域插槽的方式才需要注册
	},
	data() {
		return {
			// list: [
			// 	{name: 'ruyi'},
			// 	{name: 'yuguo'}
			// ]
			list: [
				{number: 100},
				{number: 45}
			]
		}
	},
	methods: {
		// renderFunc (h, name) { // render函数式渲染语法
		// 	return h('i', {
		// 		style: {
		// 			color: 'pink '
		// 		}
		// 	}, name)
		// }
		// renderFunc (h, name) { // jsx语法
		// 	return (
		// 		<i on-click={this.handleClick} style={{color: 'pink'}}>{name}</i> // 变量要用一个花括号包裹
		// 	)
		// },
		renderFunc (h, number) { // jsx语法
			return (
				<CountTo nativeOn-click={this.handleClick} on-on-animation-end={this.handleEnd} endVal={number} style={{color: 'pink'}}></CountTo> // 引入的实例不用在componnets里面注册
			)
		},
		handleClick (event) {
			// console.log(event)
		},
		handleEnd () { // 绑定自定义的事件
			// console.log('end!')
		}
	}
}
</script>

<style lang="less" scoped>
	
</style>