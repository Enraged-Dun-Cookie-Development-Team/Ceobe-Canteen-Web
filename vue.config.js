const { defineConfig } = require('@vue/cli-service')
const devServer = process.env.NODE_ENV === 'production' ? {} : {
  proxy: {
    '/api/': {
      target: 'http://server-dev.ceobecanteen.top/api/v1', 
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        '^/api/v1': ''
      }
    }
  }
}
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir:'dist',
  assetsDir: 'assets',
  devServer: devServer,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config["performance"] = {
        "maxEntrypointSize": 10000000,
        "maxAssetSize": 30000000
      }
    }
  }
})
