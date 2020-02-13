<template>
	<div>
		<!-- <a-input v-model="inputValue"></a-input> -->
		<a-input :value="inputValue" @input="handleInput"></a-input>
		<p>{{inputValue}} -> lastLetter is {{lastLetter}}</p>
		<!-- <a-show :content='inputValue' /> -->
		<p>appName:{{appName}}</p>
		<p>appNameWithVersion:{{appNameWithVersion}}</p>
		<p>{{userName}} </p>
		<p>firstLetter: {{firstLetter}} </p>
	</div>
</template>

<script>
	import AInput from '_c/AInput.vue'
	import AShow from '_c/AShow.vue'
	// import vuex from 'vuex'
	// const mapState = vuex.mapState
	import { mapState, mapGetters } from 'vuex'

	// import { createNamespacedHelpers } from 'vuex' // 命名空间使用方法
	// const { mapState } = createNamespacedHelpers('user') // user命名空间
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
		},
		computed: {
			...mapState([
				'appName'
			]),
			// ...mapState({
			// 	appName: state => state.appName,
			// 	userName: state => state.user.userName
			// })
			// ...mapState('user',['userName'])
			...mapState('user',{
				userName: state => state.userName
			}),
			...mapGetters(['appNameWithVersion','firstLetter']),
			// ...mapGetters('user',['firstLetter']),
			// appNameWithVersion () {
			// 	return this.$store.getters.appNameWithVersion
			// },
			// ...mapState({
			// 	userName: state => state.userName // 命名空间直接省略模块名
			// })
			// appName () {
			// 	return this.$store.state.appName
			// },
			// userName () {
			// 	return this.$store.state.user.userName
			// }
			lastLetter () {
				return this.inputValue.substr(-1,1)
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>