
//http-proxy verion > 1.0     配置代理 跨域
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // 配置代理  请求网易云音乐， 将 api 替换为 '' 空
  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
    pathRewrite: { //路径替换
      '^/api': ''
    }
  }));
};