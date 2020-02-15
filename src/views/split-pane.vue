<template>
	<div class="split-pane-con">
		<!-- <split-pane :value="offset" @input="handleInput"></split-pane> -->
		<!-- <split-pane v-model="offset"></split-pane> -->
		<split-pane :value.sync="offset">
			<div slot="left">left</div>
			<div slot="right">right</div>
		</split-pane>
	</div>
</template>

<script>
import SplitPane from '_c/split-pane'
	export default {
		name: '',
		data() {
			return {
				offset: 0.8
			}
		},
		components: {
			SplitPane
		},
		methods: {
			// handleInput(val) {
			// 	this.offset = val
			// }
		}
	}
</script>

<style lang="less" scoped>
	.split-pane-con {
		width:400px;
		height: 200px;
		background: gold;
	}
</style>