<template>
	<li class="a-menu-item ">
		<slot></slot>
	</li>
</template>

<script>
// 菜单里的每一项
	export default {
		name: 'AMenuItem',
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="less">
.a-menu-item {
	background: #e8e8e8;
	color: #fff;
}
</style>