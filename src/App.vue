<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->

			<!--命名路由-->
			<router-link :to="{name: 'Home'}">Home</router-link> |
      <router-link :to="{name: 'About'}">About</router-link>
    </div>

		<!--命名视图-->
    <router-view/>
		<router-view name='emali'></router-view>
		<router-view name='tel'></router-view>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
