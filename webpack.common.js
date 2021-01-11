// Import dependencies for the webpack configuration.
const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    // Set entrypoint(s) to define what files will be bundled by Webpack.
    app: "./src/index.js",
  },
  output: {
    // Tell Webpack to put its generated bundle(s) in a directory called "dist" at the root of the project
    path: path.resolve(__dirname, "dist"),
    // This syntax for the filename allows for multiple named entrypoints, should we need that in the future, which takes advantage of Webpack's ability to code-split based on those entrypoints.
    filename: "[name].build.js",
  },
  resolve: {
    // Define aliases for major folders in the project so import statements are easier to read at the top of files (no relative paths).
    alias: {
      Components: path.resolve(__dirname, 'src', 'components'),
      Containers: path.resolve(__dirname, 'src', 'containers'),
    },
    // Defining file extensions to resolve allows us to not include the extension when importing files of these types 
    // (e.g. Import Home from 'Components/Home' instead of Import Home from 'Components/Home.js').
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    // Enable Webpack to preprocess the necessary file types that should be included in the bundle.
    rules: [
      // Define rule for processing/bundling js/jsx files.
      {
        test: /\.(js|jsx)$/,
        // exclude js/jsx files within node_modules from being bundled.
        exclude: "/node_modules/",
        // Use babel to process any ES2015+ code (e.g. async/await) and transpile it so browsers can read the output code.
        use: ["babel-loader"]
      },

      // We need to bundle our style files as static resources.
      {
        test: /\.css$/,
        // Using style loader allows us to inject css into the DOM.
        // Using css-loader allows Webpack to interpret and resolve css syntax (e.g. @import)
        use: ["style-loader", "css-loader"]
      }
    ],
  },
  plugins: [
    // Using this plugin allows us to inject our bundled js into the actual DOM. The project's entrypoint uses ReactDOM to render a component within a specific DOM element, specified by id ("app"). 
    // This plugin references an HTML file we can use/customize as a template for our project's document.
    new HtmlWebpackPlugin({
      title: "Lazy Load An Image", // Pass a title variable to the html template.
      template: path.resolve(__dirname, "src", "index.html"),
    })
  ],
};