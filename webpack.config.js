const path = require('path');
module.exports = {
  entry: {
    javascript: "./src/js/app.jsx",
  },
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: [ 'es2015', 'react' ]}},
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: [ 'es2015', 'react' ]}}
    ]
  }
}