<template>
	<input @input='handleInput' :value='value'>
</template>

<script>
	export default {
		name: '',
		props: {
			value: {
				type: [String, Number],
				default: ''
			}
		},
		methods: {
			handleInput (event) {
				const value = event.target.value
				this.$emit('input', value) // 父子组件传值
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>