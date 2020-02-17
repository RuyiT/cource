<template>
	<ul class="a-submenu">
		<div class="a-submenu-title" @click="handClick">
			<slot name="title"></slot>
			<span class="shrink-icon" :style="{ transform: `rotateZ(${showChild ? 0 : 180}deg)` }">^</span>
		</div>
		<div v-show="showChild" class="a-submenu-child-box">
			<slot></slot>	
		</div>
	</ul>
</template>

<script>
// 收缩菜单的组件
	export default {
		name: 'ASubmenu',
		data() {
			return {
				showChild: false
			}
		},
		methods: {
			handClick () {
				this.showChild = !this.showChild
			}
		}
	}
</script>

<style lang="less">
.a-submenu {
	&-title {
		background: rgb(33, 35, 39);
		color: #fff;
		position: relative;
		.shrink-icon {
			position: absolute;
			top: 4px;
			right:10px;
		}
	}
	
	&-child-box {
		overflow: hidden;
		padding-left: 20px;
	}
}
</style>