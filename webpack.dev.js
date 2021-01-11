// This file builds upon webpack.common.js, to be utilized for local dev
// environments, or dev related builds.

const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  // Set the mode to development, as the mode defaults to 'production',
  // and while developing, we'd like to NOT compress/minify files in
  // order to have more visibility into our code and its processes.
  mode: "development",
  // Declare options for our local dev server (using webpack-dev-server).
  devServer: {
    contentBase: "./dist", // Defines where the content will be served from.
    hot: true, // Declares that hot module replacement will be turned on.
  },
  // Use webpack's built-in HMR plugin to make development for efficient 
  // (avoid constant manual browser refreshing)
  plugins: [new webpack.HotModuleReplacementPlugin()],
});