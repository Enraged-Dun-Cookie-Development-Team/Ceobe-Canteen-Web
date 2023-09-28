const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir:'dist',
  assetsDir: 'assets',
  devServer: {
    proxy: {
      '/development': {
        target: 'http://server-dev.ceobecanteen.top/api/v1', 
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/development': ''
        }
      },
      '/production': {
        target: 'https://server.ceobecanteen.top/api/v1',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/production': ''
        }
      },
    },
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config["performance"] = {
        "maxEntrypointSize": 10000000,
        "maxAssetSize": 30000000
      }
    }
  }
})
