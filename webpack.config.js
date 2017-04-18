const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    publicPath: '/',
    hotOnly: true,
    inline: true
  },
  entry: [
    // 'react-hot-loader/patch',
    // // activate HMR for React

    // 'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    // 'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './index'
  ],
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: path.resolve(__dirname, 'dist'),

    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: 'inline-source-map',


  module: {
    rules: [{
        test: /\.jsx?$/,
        use: ['babel-loader', ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules&importLoaders=1', ],
        // use: ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   use: ['css-loader?modules', 'postcss-loader']
        // })
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', 'css-loader?modules&importLoaders=1', 'less-loader'
        ]
        // use: ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   use: ['css-loader?modules', 'less-loader', 'postcss-loader']
        // })
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: ['url-loader', ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    // new webpack.optimize.UglifyJsPlugin({
    //   // compress: process.env.NODE_ENV === 'production'
    //   compress: env.production,
    //   minimize: true,
    // }),

    new ExtractTextPlugin({
      filename: 'build.min.css',
      allChunks: true,
    })
  ]
};