//放一些与业务有关的方法

import Cookies from 'js-cookie'
import clonedeep from 'clonedeep'

export const setTitle = (title) => {
	window.document.title = title || 'admin'
}
export const setToken = (token , tokenName = 'token') => {
	Cookies.set(tokenName, token)
}
export const getToken = (tokenName = 'token') => {
	return Cookies.get(tokenName)
}
export const removeToken = (token) => {
	return Cookies.remove(token)
}
export const putFileInFolder = (folderList, fileList) => {
	const folderListCloned = clonedeep(folderList)
	const fileListCloned = clonedeep(fileList)
	return folderListCloned.map(folderItem => {  // 用map对文件夹列表进行遍历
		const folderId = folderItem.id  // 获取文件夹id
		let index = fileListCloned.length  // 获取文件列表的length
		while (--index >=0) { // 
			const fileItem = fileListCloned[index]
			if (fileItem.folder_id === folderId) { // 如果当前循环到的文件Id 等于文件夹Id,那么当前遍历的文件属于这个文件夹
				const file = fileListCloned.splice(index, 1)[0] // 从文件列表删除当前文件,splice返回包含删除的文件的数组
				file.title = file.name // iview必须传一个title属性，拷贝name
				if (folderItem.children) folderItem.children.push(file) // 判断有没用children这个属性，有直接push
				else folderItem.children = [file] // 没有就添加一个包含file的数组
			}
		}
		folderItem.type = 'folder' // 添加一个type属性，留着备用字段
		return folderItem
	})
}
export const transferFolderToTree = folderList => {
	console.log({folderList})
	if (!folderList.length) return []
	const folderListCloned = clonedeep(folderList)
	const handle = id => {
		let arr = []
		folderListCloned.forEach(folder => { // 遍历文件夹数组
			if (folder.folder_id === id) {// 如果遍历到的文件夹的folder_id等于传进来的文件夹的id ,那遍历到的文件夹是传进来那个文件的子级
				const children = handle(folder.id) // 传当前遍历的文件夹Id,看当前文件夹有那些子级文件夹
				if (folder.children) folder.children = [].concat(folder.children, children) // 如果当前文件夹有子级，把已有的子级和遍历到的子级合并
				else folder.children = children // 如果没有子级的话，把当前的子级赋值给folder的子级
				folder.title = folder.name
				arr.push(folder)
			}
		})
		return arr
	}                     
	return handle(0)
}
export const expandSpecifiedFolder = (folderTree, id) => {
  return folderTree.map(item => {
    if (item.type === 'folder') {
      if (item.id === id) {
        item.expand = true
      } else {
        if (item.children && item.children.length) {
          item.children = expandSpecifiedFolder(item.children, id)
          if (item.children.some(child => {
            return child.expand === true
          })) {
            item.expand = true
          } else {
            item.expand = false
          }
        }
      }
    }
    return item
  })
}