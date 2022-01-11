// 扩展 vue 原有的功能，全局组件，自定义指令，挂载原型方法。注意：没有全局过滤器
// 这就是插件
// vue 2.0 插件写法要素：导出一个对象，有 install 函数，默认传入了 Vue 构造函数，在Vue基础之上扩展
// vue 3.0 插件写法要素：导出一个对象，有 install 函数，默认传入了 app 应用实例，app基础之上扩展

import XtxSkeleton from './xtx-skeleton.vue'
export default {
  install(app) {
    // 在 app 上进行扩展，app提供 component directive 函数
    // 如果要挂载原型方法，app.config.globalPropertities 方式
    app.component(XtxSkeleton.name, XtxSkeleton)
  }
}
