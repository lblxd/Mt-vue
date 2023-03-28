const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require("postcss-pxtorem")({
              rootValue: 16,
              propList: ["*"],
            }),
          ],
        },
      },
    },
  },
});
