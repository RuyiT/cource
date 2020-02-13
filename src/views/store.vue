<template>
	<div>
		<!-- <a-input v-model="inputValue"></a-input> -->
		<a-input :value="inputValue" @input="handleInput"></a-input>
		<p>{{inputValue}}</p>
		<a-show :content='inputValue' />
	</div>
</template>

<script>
	import AInput from '_c/AInput.vue'
	import AShow from '_c/AShow.vue'
	export default {
		name: 'store',
		components: {
			AInput,
			AShow
		},
		data() {
			return {
				inputValue: ''
			}
		},
		methods: {
			handleInput (val) {
				this.inputValue = val
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>