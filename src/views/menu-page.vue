<template>
	<div class='menu-box'>
		<!-- <a-menu>
			<a-menu-item>1111</a-menu-item>
			<a-menu-item>2222</a-menu-item>
			<a-submenu>
				<div slot="title">3333</div>
				<a-menu-item>3333-11</a-menu-item>
				<a-submenu>
					<div slot="title">3333-22</div>
					<a-menu-item>3333-22-11</a-menu-item>
					<a-menu-item>3333-22-22</a-menu-item>
				</a-submenu>
			</a-submenu>
		</a-menu> -->
		<a-menu>
			<template v-for="(item, index) in list">
				<a-menu-item v-if="!item.children" :key="`menu_item_${index}`">
					{{item.title}}
				</a-menu-item>
				<re-submenu v-else :parent="item" :index="index" :key="`menu-item_${index}`"></re-submenu>
			</template>
		</a-menu>
	</div>
</template>

<script>
import menuComponents from '_c/menu'
import ReSubmenu from './re-submenu'
const { AMenu, AMenuItem, ASubmenu } = menuComponents // 这样写，在写标签的时候会有提示
	export default {
		name: 'menu_page',
		components: {
			AMenu,
			AMenuItem,
			ASubmenu,
			ReSubmenu
		},
		data() {
			return {
				list: [
        {
          title: '1111'
        },
        {
          title: '2222'
        },
        {
          title: '3333',
          children: [
            {
              title: '3333-1'
            },
            {
              title: '3333-2',
              children: [
                {
                  title: '3333-2-1'
                },
                {
                  title: '3333-2-2'
                },
                {
                  title: '3333-2-3',
                  children: [
                    {
                      title: '3333-2-3-1'
                    },
                    {
                      title: '3333-2-3-2'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
			}
		}
	}
</script>

<style lang="less" scoped>
.menu-box {
	width: 300px;
	height: 400px
}
</style>