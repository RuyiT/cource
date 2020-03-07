<template>
	<div 
	class="message-box-wrapper"
	v-if="show"
	:class="{fail: !success,'fadein': showContent, 'fadeout': !showContent}">
		<div class="title">
			<img v-if="type == 'success'" src="@/assets/img/logo.png">
			<img v-if="type == 'warning'" src="@/assets/img/logo.png">
			<img v-if="type == 'fail'" src="@/assets/img/logo.png">
			<span>{{title}}</span>
		</div>

		<div class="content" v-if="content">
			{{content}}
		</div>

		<div class="btn-group">
			<div
			class="btn noselect pointer cancel"
			v-show="showCancelButton"
			@click="cancel"
			>
				{{cancelText}}
			</div>
			<div
			class="btn noselect pointer confirm"
			@click="confirm"
			>
				{{confirmText}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tips',
		data() {
			return {
				
			}
		},
		methods: {
			confirm() {
				this.show = false;
				this.callback && this.callback(true)
			},
			cancel() {
				this.show = false;
				this.callback && this.callback(false)
			},
		},
		computed: {
			confirmText() {
				let confirmText = this.confirmButtonText ? this.confirmButtonText : '确定';
				return confirmText;
			},
			cancelText() {
				if (this.showCancelButton) {
					let cancelText = this.cancelButtonText ? this.cancelButtonText : '取消';
					return cancelText;
				} else {
					return ''
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.message-box-wrapper .fail {
		background: #fff2f0;
	}
	.message-box-wrapper {
		position: fixed;
		left: 50%;
		top: 50%;
		border-radius: 10px;
		padding: 40px 40px 20px 40px;
		box-sizing: border-box;
		transform: translate(-50%, -50%);
		color: #545454;
		font-size: 16px;
		min-width: 500px;
		height: 200px;
		background: #fff;
		box-shadow: 0 0 40 4px rgba(0, 0, 0, 0.12);
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		img {
			width: 24px;
			height: 24px;
			margin-right: 16px;
		}
		.title {
			font-size: 16px;
			font-weight: bold;
			color: #092048;
		}
		.content {
			font-size: 16px;
			color: #545454;
			line-height: 24px;
			padding-left: 40px;
			margin-top: 10px;
		}
		.btn-group {
			margin-top: auto;
			display: flex;
			justify-content: flex-end;
			text-align: center;
			.confirm {
				background: #0660ff;
				color: #fff;
			}
			.cancel {
				box-sizing: border-box;
				border: solid 1px #0660ff;
				// color: #fff;
			}
			.btn {
				width: 120px;
				height: 40px;
				line-height: 40px;
				border-radius: 24px;
				font-size: 16px;
				margin-left: 12px;
			}
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