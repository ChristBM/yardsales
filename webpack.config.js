const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve( __dirname, "build" ),
    filename: 'bundle.[contenthash].js',
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: [ '.js', '.jsx' ],
    alias: {
      '@images': path.resolve( __dirname, 'src/assets/images' ),
      '@components': path.resolve( __dirname, 'src/components' ),
      '@containers': path.resolve( __dirname, 'src/containers' ),
      '@hooks': path.resolve( __dirname, 'src/hooks' ),
      '@context': path.resolve( __dirname, 'src/context' ),
      '@pages': path.resolve( __dirname, 'src/pages' ),
      '@routes': path.resolve( __dirname, 'src/routes' ),
      '@styles': path.resolve( __dirname, 'src/styles' ),
    }
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
      },
      {
        test: /\.woff2$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/fonts/[hash][ext][query]',
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/images/[hash][ext][query]',
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new Dotenv({
      path: './.env',
      safe: true,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
          extractComments: true,
      }),
    ]
  }

}