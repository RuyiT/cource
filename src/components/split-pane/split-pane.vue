<template>
	<div class="split-pane-wrapper" ref="outer">
		<div class="pane pane-left" :style="{ width: leftOffsetPercent , paddingRight: `${triggerWidth / 2}px`}">
			<button @click="handleClick">修改宽度</button>
			<slot name='left'/> 
		</div>
		<div class="pane-trigger-con" @mousedown="handleMousedown" :style="{ left: triggerLeft, width: `${triggerWidth}px` }" ></div>
		<div class="pane pane-right" :style="{ left: leftOffsetPercent, paddingLeft: `${triggerWidth / 2}px`}">
			<slot name='right'/> 
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SplitPane',
		props: {
			value: {
				type: Number,
				default: 0.5,
			},
			triggerWidth: {
				type: Number,
				default: 8,
			},
			min: { // 最小值
				type: Number,
				default: 0.1
			},
			max: { // 最大值
				type: Number,
				default: 0.9
			}
		},
		data() {
			return {
				leftOffset: 0.3,
				canMove: false, // 记录鼠标按下的状态
				initOffset: 0, // 鼠标在拖动条上的初始偏移值
			}
		},
		computed: {
			leftOffsetPercent () {
				return `${this.value * 100}%`
			},
			triggerLeft () {
				return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`
			}
		},
		methods: {
			handleMousedown (event) {
				document.addEventListener('mousemove',this.handleMouseover)
				document.addEventListener('mouseup', this.handleMouseup) // 绑定全局的鼠标抬起事件
				this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
				this.canMove = true // 鼠标按下
			},
			handleMouseup () {
				this.canMove = false // 鼠标抬起
			},
			handleMouseover (event) {
				if (!this.canMove) return
				const outerRect = this.$refs.outer.getBoundingClientRect()
				let offsetPercent = (event.pageX - outerRect.left - this.initOffset + this.triggerWidth / 2) / outerRect.width
				if (offsetPercent < this.min) offsetPercent = this.min
				if (offsetPercent > this.max) offsetPercent = this.max
				// this.value = offsetPercent
				// this.$emit('input', offsetPercent)
				this.$emit('update:value', offsetPercent)
			},
			handleClick () {
				this.value -= 0.02
			}
		}
	}
</script>

<style lang="less" scoped>
.split-pane-wrapper{
	height: 100%;
	position: relative;
	.pane {
		height: 100%;
		position:absolute;
		top: 0;
		&-left {
			// width: 30%;
			background:palevioletred;
		}
		&-right {
			right:0;
			bottom:0;
			// left: 30%;
			background: paleturquoise;
		}
		&-trigger-con {
			// width: 8px;
			height: 100%;
			background: red;
			position: absolute;
			top: 0;
			z-index: 2;
			user-select: none; // 禁止选中元素
			cursor: col-resize; //  鼠标图标的网站 css-cursor.techstream.org
		}
	}
}
</style>