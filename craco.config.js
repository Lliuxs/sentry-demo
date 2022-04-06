module.exports = {
  style: {
    //修改样式配置
  },
  eslint: {
    // 修改eslint配置，同.eslintrc
  },
  babel: {
    //babel配置，同.babelrc
  },
  plugins: [
    //注入插件
  ],
  webpack: {
    configure: (config, { env, paths }) => {
      //修改webpack配置
      return config;
    },
  },
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    // 修改devServer配置
    return devServerConfig;
  },
};
