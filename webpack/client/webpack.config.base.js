// react_start/webpack.config.js
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const config = {
  entry: path.resolve(__dirname, "../../src/client/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../../dist/client"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
            options: { transpileOnly: true }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /(\.s[ac]ss)$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      },
      {
        // 追記
        test: /\.png$/,
        loaders: "url-loader"
      },
      {
        // 追記
        test: /\.jpg$/,
        loaders: "url-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", "scss", "css"],
    alias: {
      "@src": path.resolve(__dirname, "../../src"),
      "@client": path.resolve(__dirname, "../../src/client"),
      "@types": path.resolve(__dirname, "../../src/types")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/index.html",
      filename: "index.html"
    }),
    new ForkTsCheckerWebpackPlugin({ silent: true })
  ]
};

module.exports = config;
