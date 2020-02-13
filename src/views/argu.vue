<template>
	<div>
		{{ name }}
	</div>
</template>

<script>
	export default {
		name: 'argu',
		props: {
			name: {
				type: String,
				default: 'hhh'
			}
		},
		data () {
			return {
				//
			}
		},
		beforeRouteUpdata (to, form, next) {
			// 组件路由Url发生变化，组件被复用的时候调用
			next()
		},
		mounted () {
			// console.log(this.$params.name)
		}
	}
</script>

<style lang="less" scoped>
	
</style>