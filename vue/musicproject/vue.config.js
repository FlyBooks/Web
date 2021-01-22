module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(html)$/,
          exclude: /node_modules/,
          use: {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        },
      ],
    },
  },

  devServer: {
    host: "localhost",
    port: 8080,
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        "/",
        "/recommend",
        "/singer",
        "/rank",
        "/search",
        "/profile",
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      postProcess: (route) => {
        // Defer scripts and tell Vue it's been server rendered to trigger hydration
        route.html = route.html
          .replace(/<script (.*?)>/g, "<script $1 defer>")
          .replace('id="app"', 'id="app" data-server-rendered="true"');
        return route;
      },
    },
  },
};
