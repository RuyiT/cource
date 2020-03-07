<template>
	<div class='but' :clas="butClass" :style="butStyle" @click="handleClick">
		<slot name="left"></slot>
		<span>{{ text }}</span>
		<slot name="right"></slot>
	</div>
</template>

<script>
	export default {
		name: 'butBox',
		data() {
			return {
				
			}
		},
		props: {
			text: String, // 按钮的文本
			/**按钮的类名，用来控制背景颜色
			 * but-white 白色
			 * but-blue 蓝色
			 * disabled 灰色
			 * but-text 纯文本按钮
			 */
			butClass: {
				type: String,
				default: ''
			},
			/**
			 * 自定义的样式，主要控制宽高
			 */
			butStyle: {
				type: Object,
				default: () => ({})
			},
			methods: {
				handleClick() {
					this.$emit('on-click')
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.but {
		width: 120px;
		height: 40px; 
		border-radius: 20px;
		font-size: 16px;
		text-align: center;
		line-height: 40px;
		margin-left: 12px;
		cursor: pointer;
		&-white {
			color: #0660ff;
			background: #fff;
			border: solid 1px #eee;
		}
		&-blue {
			color: #fff;
			background: #0660ff;
		}
		/**自定义图标传的样式 */
		.slot { 
			vertical-align: sub;
			&-left {
				margin-right: 6px;
			}
			&-right {
				margin-left: 6px;
			}
		}
		&.but-text {
			width: 60px;
			height: 18px;
			border-radius: 0;
			font-size: 12px;
			line-height: 20px;
			margin-left: 6px;
		}
		&.disabled {
			background: #eee;
			cursor: not-allowed;
		}
	}
</style>