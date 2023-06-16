const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://carbook-front-production.up.railway.app",
      changeOrigin: true,
    })
  );
};
