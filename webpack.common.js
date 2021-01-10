const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: ["./src/index.js"],
    vendor: ["react", "react-dom"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].build.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/",
        use: ["babel-loader"]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Lazy Load An Image",
      template: path.resolve(__dirname, "src", "index.html"),
    })
  ],
};