<template>
	<div
	class="wrap"
	v-if="show"
	:class="{fail: !success, 'fadein': showContent, 'fadeout': !showContent}"
	>
		<img v-show="success" src="@/assets/img/logo.png">
		<img v-show="!success" src="@/assets/img/logo.png">
		{{text}}
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.wrap.fail {
		background: #fff2f0;
	}
	.wrap {
		position: fixed;
		left: 50%;
		top: 50%;
		display: flex;
		align-items: center;
		box-shadow: 0 0 40px 4px rgba(0, 0, 0, 0.12);
		border-radius: 10px;
		padding: 21px 30px;
		background: #f0ffea;
		box-sizing: border-box;
		transform: translate(-50%, -50%);
		color: #545454;
		font-size: 16px;
		min-width: 280px;
		img {
			width: 24px; 
			height: 24px;
			margin-right: 12px;
		}
	}
	.fadein {
		animation: animate_in 0.25s;
	}
	.fadeout {
		animation: animate_out 0.25s;
		opacity: 0;
	}
	@keyframes animate_in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes animate_out {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>