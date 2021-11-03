const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve( __dirname, "dist" ),
    filename: 'bundle.js',
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
    },
  },
  mode: 'development',
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
            filename: 'assets/fonts/[name].[ext]',
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/images/[name][ext]',
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
      filename: "[name].css",
    }),
    new Dotenv({
      path: './.env',
      safe: true,
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    open: true,
    historyApiFallback: true,
  },

}