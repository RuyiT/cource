<template>
	<Table :columns="insideColumns" :data="value"></Table>
</template>

<script>
import clonedeep from 'clonedeep'
export default {
	name: 'EditTable',
	data() {
		return {
			insideColumns: [],
			edittingId: '',
			edittingContent: '',
		}
	},
	props: {
		columns: {
			type: Array,
			default: () => []
		},
		value: {
			type: Array,
			default: () => []
		}
	},
	watch: {
		columns () {
			this.initColumns()	
		}
	},
	methods: {
		handleClick ({ row, index, column}) {
			console.log({ row, index, column})
			console.log(this.edittingId)
			if (this.edittingId === `${column.key}_${index}`) {
				let data = clonedeep(this.value)
				data[index][column.key] = this.edittingContent
				this.$emit('input',data)
				this.$emit('on-edit',{ row, index, column, newValue: this.edittingContent})
				this.edittingId = ''
				this.edittingContent = ''
			} else {
				this.edittingId = `${column.key}_${index}`
			}
		},
		handleInput (newValue) {
			this.edittingContent = newValue
			
		},
		initColumns () {
			// console.log(this.columns) // 拿到列数组里的每一个列
			const insideColumns = this.columns.map(item => {
				if (!item.render && item.editable) {
					item.render = (h, { row, index, column }) =>{
						// console.log( row, index, column)
						const isEditting = this.edittingId === `${column.key}_${index}`
						return (
							<div>
								{isEditting ? <i-input value={row[column.key]} style='width: 50px' on-input={this.handleInput}></i-input> : <span>{row[column.key]}</span>}
								<i-button on-click={this.handleClick.bind(this, { row, index, column})}>{isEditting ? '保存' : '编辑'}</i-button>
							</div>
						)
					}
					return item 
				} else return item
			})
			this.insideColumns = insideColumns
		}
	},
	mounted () {
		this.initColumns()
	}
}
</script>

<style lang="less" scoped>
	
</style>