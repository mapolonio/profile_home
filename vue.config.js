module.exports = {
  chainWebpack: config => {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|cur)(\?.*)?$/)
      .use('url-loader');
  }
};
