const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [{ loader: "ts-loader", options: { transpileOnly: true } }],
        exclude: /node_modules/
      },

      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: {} },
          "css-loader"
        ]
      },
      { test: /\.png$/, loaders: "url-loader" },
      { test: /\.jpg$/, loaders: "url-loader" }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", "scss", "css"],
    alias: {
      "~src": path.resolve(__dirname, "../src"),
      "~api": path.resolve(__dirname, "../src/api"),
      "~assets": path.resolve(__dirname, "../src/assets"),
      "~redux": path.resolve(__dirname, "../src/redux"),
      "~types": path.resolve(__dirname, "../src/types"),
      "~views": path.resolve(__dirname, "../src/views")
    }
  },
  plugins: [
    new MiniCssExtractPlugin({}),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      favicon: "./public/favicon.png"
    }),
    new ForkTsCheckerWebpackPlugin({ silent: true })
  ]
};

module.exports = config;
