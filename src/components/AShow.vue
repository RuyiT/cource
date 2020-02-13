<template>
	<div>
	<p>a-show: {{ content }}</p>
	</div>
</template>

<script>
	export default {
		name: '',
		props: {
			content: {
				type: [String, Number],
				default: ''
			}
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>