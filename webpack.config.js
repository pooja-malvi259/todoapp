const path = require('path');
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: [ 'es2015', 'react' ]},
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: [ 'es2015', 'react' ] }
    ]
  }
}