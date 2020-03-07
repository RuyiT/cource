<template>
	<div class="layout-wrapper">
		<Layout class="layout-outer">
			<Sider :width="350" collapsible breakpoint="sm" reverse-arrow v-model="collapsed"> 
				<side-menu :collapsed="collapsed" :list="menuList"></side-menu>
			</Sider>
			<Layout>
				<Header class="header-wrapper">
					<Icon :class="triggerClasses" type="md-menu" :size="32" @click.native="handleCollapsed" />
				</Header>
				<Content class="content-con">
					<Card shadow class="page-card">
						<router-view></router-view>
					</Card>
				</Content>
			</Layout>
		</Layout>
	</div>
</template>

<script>
	import SideMenu from '_c/side-menu'
	export default {
		name: '',
		data() {
			return {
				collapsed: true,
				menuList: [
					{
						title: '1',
						name: "menu1",
						icon: 'ios-alarm'
					},
					{
						title: '2',
						name: "menu2",
						icon: 'ios-alarm'
					},
					{
						title: '3',
						name: "menu3",
						icon: 'ios-alarm',
						children: [
							{
								title: '3-1',
								name: "menu11",
								icon: 'ios-alarm'
							},
							{
								title: '3-2',
								name: "menu22",
								icon: 'ios-alarm',
								children: [
									{
										title: '3-2-1',
										name: "menu121",
										icon: 'ios-alarm'
									},
									{
										title: '3-2-2',
										name: "menu122",
										icon: 'ios-alarm'
									},
								]
							},
						]
					},
					{
						title: '4',
						name: "menu4",
						icon: 'ios-alarm'
					},
				]
			}
		},
		components: {
			SideMenu
		},
		computed: {
			triggerClasses () {
				return [
					'trigger-icon',
					this.collapsed ? 'rotate' : ''
				]
			}
		},
		methods: {
			handleCollapsed() {
				this.collapsed  = !this.collapsed
				// console.log('22')
				this.$message({
					title: 'sdfsad',
					content: '内容',
					type: 'warning',
					confirmButtonText:'提交',
					showCancelButton: true,
					cancelButtonText: '不提交'
				}).then(action => {
					console.log(action)
				})
				// this.$tips({
				// 	text: '大概',
				// 	success: true,
				// })
			}
		}
	}
</script>

<style lang="less">
	.layout-wrapper, .layout-outer {
		height: 100%;
		background:red!important;
		.header-wrapper {
			background: #fff;
			box-shadow: 0 1px 1px rgba(0,0,0,.1);
			padding: 0 23px;
			.trigger-icon {
				cursor: pointer;
				transition: transform .3s ease;
				&.rotate {
					transform: rotateZ(-90deg);
					transition: transform .3s ease;
				}
			}
		}
		.content-con {
			padding: 10px;
		}
		.page-card{
			min-height: ~"calc(100vh - 84px)"  // less里面写calc 需要加~“”
		}
	}
</style>