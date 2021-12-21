const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

const { NODE_ENV } = process.env;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HandlebarsWebpackPlugin = require("handlebars-webpack-plugin");
const path = require("path");

module.exports = {
  entry: resolve(__dirname, "./src/index.js"),
  output: {
    filename: "bundle.js",
    path: resolve(`${__dirname}/dist`),
    clean: true,
    environment: {
      arrowFunction: false,
    },
  },
  devtool: NODE_ENV === "production" ? "hidden-source-map" : "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpeg)$/i,
        type: "asset/resource",
        generator: {
          filename: "./image/[contenthash][ext]",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  mode: NODE_ENV === "production" ? "production" : "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "index.html"),
    }),

    new HandlebarsWebpackPlugin({
      htmlWebpackPlugin: {
        enabled: true, // register all partials from html-webpack-plugin, defaults to `false`
        prefix: "html", // where to look for htmlWebpackPlugin output. default is "html"
        HtmlWebpackPlugin, // optionally: pass in HtmlWebpackPlugin if it cannot be resolved
      },

      entry: path.join(process.cwd(), "src", "hbs", "*.hbs"),
      output: path.join(process.cwd(), "dist", "[name].html"),

      partials: [
        path.join(
          process.cwd(),
          "html",
          /* <-- this should match htmlWebpackPlugin.prefix */ "*",
          "*.hbs"
        ),
        path.join(process.cwd(), "src", "hbs", "*", "*.hbs"),
      ],
    }),
    new MiniCssExtractPlugin(),
  ],

  devServer: {
    client: {
      logging: "info",
    },
    compress: true,
    port: 9000,
  },
};
