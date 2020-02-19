<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->

			<!--命名路由-->
			<!-- <router-link :to="{name: 'Home'}">Home</router-link> |
      <router-link :to="{name: 'About'}">About</router-link>
    </div> -->

		<!--命名视图-->
		<!-- <transition-group name="router"> -->
		<!-- <transition-group :name="routerTransition"> -->
			<router-view key="default" />
			<router-view key="email" name='emali'></router-view>
			<router-view key="tel" name='tel'></router-view>
		<!-- </transition-group> -->
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
			routerTransition: ''
    }
	},
	watch: {
		'$router' (to) {
			// 为指定的路由切换动效
			to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName)
		}
	}
}
</script>
<style lang='less'>
html,body{
	height: 100%;
}
body{
	margin: 0
}
// 页面进入时的效果
.router-enter { // 即将进入路由
	opacity: 0;
}
.router-enter-active { // 设置组件从没有到有的过程
	transition: opacity  1s ease;
}
.router-enter-to { // 页面完全显示之后的状态
	opacity: 1;
}
// 页面离开时的效果
.router-leave { // 即将离开路由
	opacity: 1;
}
.router-leave-active {
	transition: opacity  1s ease;
}
.router-leave-to {
	opacity: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
	color: #2c3e50;
	height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
