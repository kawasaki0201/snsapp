const { legacyCreateProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    legacyCreateProxyMiddleware({
      target: "http://localhost:3018",
      changeOrigin: true,
    })
  );
};
