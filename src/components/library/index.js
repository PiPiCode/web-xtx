// 扩展 vue 原有的功能，全局组件，自定义指令，挂载原型方法。注意：没有全局过滤器
// 这就是插件
// vue 2.0 插件写法要素：导出一个对象，有 install 函数，默认传入了 Vue 构造函数，在Vue基础之上扩展
// vue 3.0 插件写法要素：导出一个对象，有 install 函数，默认传入了 app 应用实例，app基础之上扩展

// import XtxSkeleton from './xtx-skeleton.vue'
// import XtxCarousel from './xtx-carousel.vue'
// import XtxMore from './xtx-more.vue'
// import XtxBread from './xtx-bread.vue'
// import XtxBreadItem from './xtx-bread-item.vue'

/**
 * 使用 require 提供的函数 context 加载某一个目录下的所有的 .vue 后缀的文件。
 * 然后 context 函数会返回一个导入函数 importFn
 * 它有一个属性 keys() 获取所有的文件路径
 * 通过文件路径数组，遍历数组，再使用 importFn 根据路径导入组件对象
 * 遍历的同时进行全局注册即可
 */
import defaultImg from '@/assets/images/200.png'

// context(目录/路径，是否加载子目录，加载文件的匹配正则)
const importFn = require.context('./', false, /\.vue$/)

export default {
  install(app) {
    // 在 app 上进行扩展，app提供 component directive 函数
    // 如果要挂载原型方法，app.config.globalPropertities 方式
    // app.component(XtxSkeleton.name, XtxSkeleton)
    // app.component(XtxCarousel.name, XtxCarousel)
    // app.component(XtxMore.name, XtxMore)
    // app.component(XtxBread.name, XtxBread)
    // app.component(XtxBreadItem.name, XtxBreadItem)

    // 根据 keys 批量注册
    // importFn.keys().forEach(path => {
    //   console.log(path)
    //   // 导入组件
    //   const component = importFn(path).default
    //   // 注册组件
    //   app.component(component.name, component)
    // })
    importFn
      .keys()
      .map(importFn)
      .forEach(item => {
        console.log(item.default.name)
        app.component(item.default.name, item.default)
      })
    // 定义指令
    defineDirective(app)
  }
}
// 定义指令
const defineDirective = app => {
  // 1.图片懒加载指令 v-lazy
  // 原理：先存储图片地址不能在src 上，当图片进入可视区，将存储图片地址设置给图片元素即可。
  app.directive('lazy', {
    // vue2.0 监听使用指令的 DOM 是否创建好，钩子函数：inserted
    // vue3.0 的指令拥有的钩子函数和组件的一样，使用指令的 DOM是否创建好，钩子函数：mounted
    mounted(el, binding) {
      // 2.创建一个观察对象，来观察当前使用指令的元素
      const observe = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // 4.停止观察
            observe.unobserve(el)
            // 5. 处理图片加载失败 error 图片加载失败的事件 load 图片加载成功
            el.onerror = () => {
              // 加载失败，设置默认图
              el.src = defaultImg
            }
            // 6.把指令的值设置给 el的 src 属性     binding.value 就是 指令的值
            el.src = binding.value
          }
        },
        {
          threshold: 0
        }
      )
      // 3.开始观察
      observe.observe(el)
    }
  })
}
