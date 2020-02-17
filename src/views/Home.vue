<template>
  <div class="home">
		{{ food }}
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到argu</button>
    <button @click="handleClick('replace')">替换到parent</button>
		<button @click="getInfo" :style='{ background: bgColor}'>请求数据</button>
		<img :src="url">
		<button @click="handleLogout">退出登陆</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {getUserInfo} from '@/api/user'
import { mapActions} from 'vuex'

export default {
	name: 'Home',
	props: {
		food: {
			type: String,
			default: 'hanbao'
		}
	},
	data() {
		return {
			url:'',
			bgColor: ''
		}
	},
  // components: {
  //   HelloWorld
	// },
	beforeRouteEnter (to, from, next) {
		// 即将进入页面的时候调用，获取不到this
		next(vm => {
			console.log(vm)
		})
	},
	beforeRouteLeave (to, from, next) {
		// 当用户要离开页面的时候处理一些逻辑
		const leave = confirm('您确定要离开吗?')
		if (leave) next()
		else next(false)
	},
  methods: {
		...mapActions(['logout']),
		getInfo() {
			getUserInfo({userId: 32}).then(res => {
				console.log(res.data)
				this.url = res.data.img
				this.bgColor = res.data.color
			})
			// axios.post('/getUserInfo', {userId: 32}).then(res => {
			// 	console.log(res)
			// })
		},
    handleClick (type) {
      if (type === 'back') this.$router.back()
      else if (type === 'push') {
				// const name = 'lison'
				this.$router.push({ //或者push路径名path
					// path: `/argu/${name}`
					name: 'argu',
					// query: {
					// 	name: 'lison'
					// }
          params: {
            name: 'lison'
          }
        })
      } else if (type === 'replace') {
        this.$router.replace({
          name: 'parent'
        })
      }
		},
		handleLogout () {
			this.logout()
		}
  }
}
</script>
