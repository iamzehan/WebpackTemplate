// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "static/[name][ext][query]",
  },
  devtool: "eval-source-map",
  devServer: {
    static: './dist',
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
   new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        exclude:"./readme_assets", 
      },
    ],
  },
    optimization: {
    minimizer: [
      // For webpack v5, you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line // `...`,
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  },
};
