<template>
	<div>
		<count-to ref="countTo" :end-val='endVal' @on-animation-end="handleEnd">
			<span slot="left">总金额：</span>
			<span slot="right">元</span>
		</count-to>
		<button @click="getNumber">获取数值</button>
		<button @click="updateVal">更新值</button>
	</div>
</template>

<script>
import CountTo from '_c/count-to'
	export default {
		name: '',
		data() {
			return {
				endVal: 100
			}
		},
		components: {
			CountTo
		},
		methods: {
			updateVal () {
				this.endVal += Math.random() * 100
			},
			getNumber () {
				console.log(this.$refs.countTo.getCount())
				this.$refs.countTo.getCount()
			},
			handleEnd () {

			}
		}
		
	}
</script>

<style lang="less" scoped>
	
</style>