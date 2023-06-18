const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8080",
      // target: "https://carbook-api.up.railway.app",
      changeOrigin: true,
    })
  );
};
