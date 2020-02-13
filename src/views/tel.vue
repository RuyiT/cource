<template>
	<div>
		<p> {{message}} </p>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				message: ''
			}
		},
		mounted () {
			this.$bus.$on('on-click', mes => {
				this.message = mes
			})
		}
	}
</script>

<style lang="" scoped>
	
</style>