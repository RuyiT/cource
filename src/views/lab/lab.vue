<template>
	<div>
		
		<!-- <resize-box style="margin-top: 100px;margin-left:200px">
			<div class="resize">
				test resize
			</div>
		</resize-box> -->
		<!-- <div style="position: relative;top: 100px;left: 100px"> -->
			
		
		<div class="out" :style="`margin-top:${ctop}px;margin-left:${cleft}px`">
			<vue-drag-resize style="background: pink;position: absolute" :w="200" :h='200' v-on:dragging="resizedrag" :isResizable="false" :sticks="['tm','bm','ml','mr']">
				<!-- <div style="text-align: center;line-height:200px;background: red">
					drag
				</div> -->
				drag
			</vue-drag-resize>
				<!-- <div class="resize" style="width: 100%; height: 300px; background: #e0e0e0">
						test resize
					</div> -->
		</div>
		<!-- </div> -->

		
		<!--.app-shrink是要缩放的元素，.app-shrink-drag是触发鼠标按下移动的源-->
		<!-- <div :style="shirnkStyle" class="app-shrink" draggable="true" @drop="drop" @dragover.prevent="dragover">
			<div class="app-shrink-drag" style="background:red" ref='resizeX' v-drag='{set}' @mousedown="dragonmousedown">
			</div>
			<div class="drag-down-y" style="background:red" ref='resizeY' v-drag='{set}' @mousedown="dragonmousedown">
			</div>			
			<div class="drag-left-x" style="background:red" v-drag='{set}' @mousedown="dragonmousedown">
			</div>
			<div class="drag-top-y" style="background:red" ref='resizeYT' v-drag='{set}' @mousedown="dragonmousedown">
			</div>	
		</div> -->
		
	</div>
</template>

<script>
import VueDragResize from 'vue-drag-resize'

	export default {
		name: '',
		components:{
			VueDragResize
		},
		data() {
			return {
				vw: 100,
				vh: 100,
				top: 0,
				left: 0,
				widthVal:"400", //存放要缩放元素.app-shrink的实时变动宽度值
				heightVal: '400',
				oldWidthVal:"400", //存放.app-shrink-drag是触发鼠标按下时，要缩放元素.app-shrink的su宽度值。
				oldHeightVal: '400',
				dragValX:0 ,   //存放实时鼠标的x轴移动值
				dragValY:0,
				resizeDom: null,
				MT:200,
				oldMT:'200',
				ML:200,
				dragMt: 0,
				// shirnkStyle: {
				// 	width:'100px',
				// 	height: '200px',
				// 	style: {
				// 		width: '200px',
				// 		height: '200px',
				// 		marginLeft: '100px',
				// 		marginTop: '100px'
				// 	}
				// }
			}
		},
		created() {
			this.vw = 200
			this.vh = 200
		},
		methods: {
			drop(event) {
				// console.log('aaaaaaaaaa',event)
			},
			dragover(e) {
				// console.log('clicent',e)
				this.MT = e.clientY  -e.offsetY
				// this.ML = e.clientX - e.offsetY
			},
			resizedrag(newRect) {
				// this.vw = newRect.width;
				// this.vh = newRect.height;
				this.top = newRect.top;
				console.log(newRect)
				this.left = newRect.left
			},
			set(e) {
				// console.log('eeeeeeee',e)
				if(this.resizeDom === this.$refs.resizeX){
					this.dragValX = e.x
				} else if(this.resizeDom === this.$refs.resizeY) {
					this.dragValY = e.y
				} else if(this.resizeDom === this.$refs.resizeYT) {
					// this.dragMt =  e.y
					this.dragValY = e.y
				}
			},
			dragonmousedown(e){
				this.resizeDom = e.target
			}
		},
		computed: {     
			shirnkStyle() {  //动态计算要缩放元素的宽度
				return {                
					'width':this.widthVal + 'px',
					'height': this.heightVal + 'px' ,
					'margin-top': this.MT + 'px',
					'margin-left': this.ML + "px"
				};
			},
			ctop() {
				return this.top
			},
			cleft () {
				return this.left
			}
		},
		watch: {
			dragValX(val){          
				this.widthVal=parseInt(this.oldWidthVal)+parseInt(val)    
				// console.log('drag',this.dragVal)      
			},
			dragValY(val){
				this.heightVal=parseInt(this.oldHeightVal)+parseInt(val) 
			},
			dragMt(val){
				this.MT=parseInt(this.oldMT)+parseInt(val) 
			}
		},
		directives:{  //注册自定义局部指令
			drag(el,bindling){        
				let oDiv = el; //当前元素  
				// console.log('aaaaaa',bindling)        
				oDiv.onmousedown = function(e) {              
					e.preventDefault(); 
					let disX = e.clientX,
							disY = e.clientY
					document.onmousemove = function(e) {
						e.preventDefault(); 
						let x = e.clientX - disX,
								y = e.clientY - disY
						bindling.value.set({x,y})   //将鼠标按下实时变动的值从自定义指令中传递出去
					};
					document.onmouseup = function(e) {
						e.preventDefault(); 
						document.onmousemove = null;
						document.onmouseup = null;
					};
				};
			}
		}
		
		// components: {
		// 	VueDragResize
		// }
	}
</script>

<style lang="less" scoped>
	.resize {
		// width: 200px;
		// height: 200px;
		// text-align: center;
		// line-height: 200px;
		// border:1px solid red;
		// margin-top: 200px;
		// margin-left: 200px;
	}
	.out{
		width: 200px;
		height: 300px;
		background: #e0e0e0;
		// position: absolute; 
	}
.app-shrink{
	position: relative;
	&-drag{
    position: absolute;
    right: 0;
    height: 100%;
    top: 0;
    width: 1px;
		z-index: 999;
    cursor: w-resize;
	}
	.drag-down-y{
		position: absolute;
    bottom: 0;
		left: 0;
    width: 100%;
    height: 1px;
		z-index: 999;
    cursor: s-resize;
	}
	.drag-top-y{
		position: absolute;
		top: 0;
		left: 0;
		height: 1px;
		z-index: 999;
		width: 100%;
		cursor:s-resize	
	}
}
</style>
