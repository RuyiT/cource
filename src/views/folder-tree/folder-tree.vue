<template>
	<div class="folder-wrapper">
		<Tree :data="folderTree" :render="renderFunc"></Tree>
	</div>
</template>

<script>
import { getFolderList, getFileList} from '@/api/data'
import { putFileInFolder, transferFolderToTree } from '@/lib/util'
export default {
	name: '',
	data() {
		return {
			folderList: [],
			fileList: [],
			folderTree: [],
			renderFunc: (h, { root, node, data }) => {
				return (
					<div class="tree-item">
						{ data.type === 'folder' ? <icon type="ios-folder" color="#2d8cf0" style="margin-right: 5px" /> : ''}
						{data.title}
					</div>
				)
			}
		}
	},
	methods: {

	},
	mounted () {
		Promise.all([getFolderList(),getFileList()]).then(res => {
			console.log(transferFolderToTree(putFileInFolder(res[0].data, res[1].data)))
			this.folderTree	= transferFolderToTree(putFileInFolder(res[0].data, res[1].data))
		})
	}
} 
</script>

<style lang="less" >
	.folder-wrapper{
		width: 500px;
		.tree-item {
			display: inline-block;
			width: ~"calc(100% - 50px)";
			height: 28px;
			line-height: 28px;
		}
	}
</style>