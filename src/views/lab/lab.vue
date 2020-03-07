<template>
	<div @click="handleClick">
		123
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				
			}
		},
		methods: {
			handleClick() {
				this.$abc({
					show: true,
					title: 'sdfsad',
					content: '内容',
					confirmText:'提交',
					showCancelButton: true,
					cancelText: '不提交'
				}).then(action => {
					console.log(action)
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>