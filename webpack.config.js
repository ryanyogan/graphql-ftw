var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './public/js/app.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['react', 'es2015'] }
      }
    ]
  },
  devServer: {
    hot: true,
    contentBase: './public'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};