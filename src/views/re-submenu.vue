<template>
	<a-submenu>
		<div slot="title" >{{parent.title}}</div>
		<template v-for="(item, i) in parent.children">
			<a-menu-item v-if="!item.children" :key="`menu-item_${index}_${i}`">{{item.title}}</a-menu-item>
			<re-submenu v-else :key="`menu-item_${i}_${i}`" :parent="item"></re-submenu>
		</template>
	</a-submenu>
</template>

<script>
import menuComponents from '_c/menu'
const { AMenuItem, ASubmenu } = menuComponents
	export default {
		name: 'ReSubmenu',
		props: {
			parent: {
				type: Object,
				default: () => ({})
			},
			index: Number,
		},
		components: {
			AMenuItem,
			ASubmenu
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>