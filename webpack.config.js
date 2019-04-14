const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

const SRC_DIR= path.resolve(__dirname, './src')
const DIST_DIR = path.resolve(__dirname, './dist')

module.exports = {
  entry:  "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use: {
          loader: "babel-loader"
        }

      },
      {
        test: /\.css$/,
        use:["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}