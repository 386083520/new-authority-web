module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8008,
    proxy: {
      [process.env.VUE_APP_BASE_URL]: {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_URL]: ''
        }
      }
    }
  }
}
