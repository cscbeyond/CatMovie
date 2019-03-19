let path =  require('path');

module.exports = {
  devServer: {
    //host: "localhost",
    port: 8089, // 端口号
    //https: true, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
    //proxy: 'http://m.maoyan.com/ajax' // 配置跨域处理,只有一个代理

    // 配置多个代理
    proxy: {
      "/movie": {
        target: "https://m.maoyan.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "/movie": ''
        }
      },
      "/boxOffice": {
        target: "https://box.maoyan.com/promovie/api/box",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "/boxOffice": ''
        }
      }
    }
  },
}
