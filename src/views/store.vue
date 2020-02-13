<template>
	<div>
		<!-- <a-input v-model="inputValue"></a-input> -->
		<a-input :value="inputValue" @input="handleInput"></a-input>
		<p>{{inputValue}} -> lastLetter is {{lastLetter}}</p>
		<a-show :content='inputValue' />
		<p>appName:{{appName}}</p>
		<p>appNameWithVersion:{{appNameWithVersion}}</p>
		<p>userName:{{userName}} </p>
		<p>firstLetter: {{firstLetter}} </p>
		<button @click="handleChangeAppName">修改appName</button>
		<p>appversion: {{appVersion}}</p>
		<button @click="handleChangeUserName">修改userName</button>
		<button @click="abc">动态注册模块</button>
		<P v-for="(item, index) in todoList" :key="index">{{ item }}</P>
	</div>
</template>

<script>
	import AInput from '_c/AInput.vue'
	import AShow from '_c/AShow.vue'
	// import vuex from 'vuex'
	// const mapState = vuex.mapState
	import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

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
			...mapMutations(['SET_APP_NAME', 'SET_APP_VERSION','SET_USER_NAME']),
			...mapActions(['updateAppName']),
			handleInput (val) {
				this.inputValue = val
			},
			handleChangeUserName () {
				this.SET_USER_NAME('RuyiY')
				// this.$store.dispatch('updateAppName', '123')
				
			},
			handleChangeAppName () {
				// this.$store.commit('SET_APP_NAME', 'newAppName')
				// this.$store.commit('SET_APP_NAME', {
				// 	appName: 'newappName'
				// })
				// this.$store.commit({
				// 	type: 'SET_APP_NAME',
				// 	appName: 'newappName'
				// }),
				// this.SET_APP_NAME({appName:'newappName'})
				this.updateAppName()
				// this.$store.commit('SET_APP_VERSION')
				// this.SET_APP_VERSION()

			},
			abc () {
				// 用$store的registerModule方法动态注册todo模块
				// this.$store.registerModule('todo', {
				// 	state: {
				// 		todoList: [
				// 			'学习mutations',
				// 			'学习actions'
				// 		]
				// 	}
				// })

				// 用$store的registerModule方法把todo模块注册在user模块里面
				this.$store.registerModule(['user', 'todo'], {
					state: {
						todoList: [
							'学习module',
							'学习state'
						]
					}
				})
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
			...mapState({
				userName: state => state.user.userName,
				appVersion: state => state.appVersion,
				// todoList: state => state.todo ? state.todo.todoList : []
				todoList: state => state.user.todo ? state.user.todo.todoList : []
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