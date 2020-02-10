<template>
	<div>
		{{ $route.params.name}}
	</div>
</template>

<script>
	export default {
		name: '',
		data () {
			return {
				
			}
		},
		mounted () {
			console.log(this.$params.name)
		}
	}
</script>

<style lang="less" scoped>
	
</style>