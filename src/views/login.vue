<template>
	<div>
		<input v-model="userName">
		<input v-model="password" type="password">
		<button @click="handleSubmit">登录</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
	export default {
		name: 'login_page',
		data() {
			return {
				userName: '',
				password: ''
			}
		},
		methods: {
			...mapActions([
				'login'
			]),
			handleSubmit () {
				this.login({
					userName: this.userName,
					password: this.password
				}).then( () => {
					console.log('sucess!!')
					this.$router.push({
						name: 'Home'
					})
				}).catch(error => {
					console.log(error)
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>