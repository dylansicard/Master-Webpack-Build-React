const path = require("path")
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contentHash].bundle.js",
        //path.resolve is just telling it what directory to put it in (relatively), and the second argument is the folder name in which the file (named by filename above) will be written
        path: path.resolve(__dirname, "dist")
      },
    plugins: [
        new CleanWebpackPlugin()
    ]
})