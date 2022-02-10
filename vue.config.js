const path = require('path')
module.exports = {
  // 是否在开发环境下每次保存代码时都启用 eslint 验证
  lintOnSave: true,

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '@views': path.join(__dirname, './src/views'),
        '@components': path.join(__dirname, './src/components'),
        '@utils': path.join(__dirname, './src/utils')
      }
    }
  },

  pluginOptions: {
    // vue add style-resources-loader vue引入插件
    // 配置自动注入 mixins 和 variables 样式文件，不用每次使用时 import 导入
    'style-resources-loader': {
      preProcessor: 'less',
      // 哪些文件自动引入，使用绝对路径
      // 需要是 path.join 拼接完整路径
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  },
  chainWebpack: config => {
    // 图片加载
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10000 }))
  }
}
