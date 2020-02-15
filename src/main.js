import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './bus'
import CountTo from '_c/count-to'

// import Mock from './mock'

if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false
Vue.prototype.$bus = Bus

const handleClick = event => {
  console.log(event)
  event.stopPropagation()
}

let list = [{name: 'lison'}, {name: 'lili'}]
const getLiEleArr = (h) => { // 生成一个v-for循环列表的效果
  return list.map((item, index) => h('li', {
    on: {
      'click': handleClick
    },
    key: `list_item_${index}`
  }, item.name))
}

new Vue({
  router,
  store,
  // render: h => {
  //   return h(CountTo, {
  //     'class': [], // 给组件最外层添加的事件
  //     attrs: {}, // 传入属性
  //     style: {}, // 设置样式
  //     props: {
  //       endVal: 100 // 传值
  //     },
  //     // domProps: {
  //     //   innerHTML: '123' // dom上的内容	
  //     // },
  //     on: { // 组件内事件
  //       'on-animation-end': (val) => {
  //         console.log('animation end!')
  //       }
  //     },
  //     nativeOn: { // 原生绑定事件
  //       'click': () => {
  //         console.log('click!')
  //       }
  //     },
  //     directives: [], // 自定义的指令
  //     scopedSlots: {}, // 作用域插槽
  //     slot: '', // 如果组件时作为其他组件的插槽，具名插槽要添加名字
  //     key: '', // 和v-for里面的key一个意思
  //     ref: '' // 给当前组件添加ref属性
  //   })
  // }
	// render: h => h('div', [ // 在render函数的div里添加子元素，只可以是一个数组或者字符串
	//   h('span','123')  // 数组里面是一个h方法，在里面创建节点
  //   h('ul', {
  //     on: {
  //       'click': handleClick
  //     }
  //   }, getLiEleArr(h))
  // ])
  render: h => h(App)
}).$mount('#app')
