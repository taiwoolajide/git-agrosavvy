module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost/agrosavvy',
        changeOrigin: true,
      },
    },
  },
};