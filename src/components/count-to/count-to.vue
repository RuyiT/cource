<template>
	<div>
		<slot name="left"></slot>
		<span :class="countClass" ref="number" :id='eleId'></span>
		<slot name="right"></slot>
	</div>
</template>

<script>
import CountUp from 'countup'
import './count-to.less' // 引入样式
	export default {
		name: '',
		computed: {
			eleId () {
				return `count_up${this._uid}` // vue实列的每一个组件的uid值都是不相同的，所以用它作为id值
			},
			countClass () {
				return [
					'count-to-number',
					this.className
				]
			}
		},
		data() {
			return {
				counter: {}
			}
		},
		props: {
			/**
			 * @description 起始值
			 */
			startVal: {
				type: Number,
				default: 0
			},
			/**
			 * @description 最终值
			 */
			endVal: {
				type: Number,
				required: true // required为true时，此参数必须传的
			},
			/**
			 * @description 小数点后保留几位小数
			 */
			decimals: {
				type: Number,
				default: 0
			},
			/**
			 * @description 自定义的设置动画的延迟开始时间,单位毫秒
			 */
			delay: {
				type: Number,
				default: 0
			},
			className: {
				type: String,
				default: ''
			},
			/**
			 * @description 渐变时长
			 */
			duration: {
				type: Number,
				default: 1
			},
			/**
			 * @description 是否使用变速效果
			 */
			useEasing: {
				type: Boolean,
				default: false
			},
			/**
			 * @description 是否使用分组
			 */
			useGrouping: {
				type: Boolean,
				default: true
			},
			/**
			 * @description 分组使用的符号
			 */
			separator: {
				type: String,
				default: ','
			},
			/**
			 * @description 隔离小数和整数的符号
			 */
			decimal: {
				type: String,
				default: '.'
			}
		},
		watch: {
			endVal (newVal, oldVal) {
				this.counter.update(newVal)
				this.emitEndEvent()
			}
		},
		mounted () {
			this.$nextTick(() => {
				this.counter =	new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
					useEasing: this.useEasing,
					useGrouping: this.useGrouping,
					separator: this.separator,
					decimal: this.decimal
				})
			})
			setTimeout(() => {
				this.counter.start()
				this.emitEndEvent()
			},this.delay)
		},
		methods: {
			getCount () {
				// 组件内部的方法供外部使用
				return this.$refs.number.innerText
			},
			emitEndEvent () { // 当前组件某些行为触发的时候的事件
				setTimeout(() => {
					this.$emit('on-animation-end', Number(this.getCount()))
				},this.duration * 1000 + 5) // 当渐变时间执行完以后，触发on-animation-end事件
			}
		}
	}
</script>

<style lang="less" scoped>
	// @import './count-to.less'
</style>