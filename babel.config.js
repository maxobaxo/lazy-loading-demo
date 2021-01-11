// Define settings for Babel, to be utilized by babel-loader in our webpack
// configuration, in order to preprocess/transpile our ECMAScript that is more 
// recent than ES2015.

module.exports = {
  presets: ["@babel/preset-react"], // utilize babel's react preset.
}