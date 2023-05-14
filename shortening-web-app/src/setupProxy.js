const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.shrtco.de',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/v2/shorten',
      },
    })
  );
};