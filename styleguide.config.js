module.exports = {
    webpackConfig: {
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          }
        ]
      }
    },
    title: "React Elements",
    styleguideDir: "dist-docs"
  };