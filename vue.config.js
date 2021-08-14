// 修改插件选项 / vue.config.js
module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'DTNS - 每字美句每個你喜歡的瞬間'
        return args
        /* 傳給 html-webpack-plugin's 構造函數的新參數 */
        /* index.html 的 <title><%= htmlWebpackPlugin.options.title %></title> */
      })
  }
}
