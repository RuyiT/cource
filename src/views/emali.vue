<template>
	<div>
		<button @click="handleClick">按钮</button>
	</div>
</template>

<script>
	export default {
		name: '',
		mounted () {
			console.log(this.$bus)
		},
		methods: {
			handleClick () {
				this.$bus.$emit('on-click', 'hello' )
			}
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="" scoped>
	
</style>
