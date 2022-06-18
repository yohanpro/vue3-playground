const path = require("path");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
        "@atomics": path.resolve("./src/components/atomics"),
        "@molecules": path.resolve("./src/components/molecules"),
        "@organisms": path.resolve("./src/components/organisms"),
        "@pages": path.resolve("./src/pages"),
        "@components": path.resolve("./src/components"),
        "@assets": path.resolve("./src/assets"),
        "@layout": path.resolve("./src/layout"),
        "@styles": path.resolve("./src/styles"),
        "@constants": path.resolve("./src/constants"),
        "@hooks": path.resolve("./src/hooks"),
      },
      extensions: [".js", ".vue", ".json", ".tsx", ".jsx"],
    },
  },
});
