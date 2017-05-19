const webpack = require('webpack')

module.exports = {
  entry: './src/tag.js',
  output: {
    publicPath: __dirname + '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tag$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: 'riot-tag-loader',
            }
          ]
        },
      {
        test: /\.js|\.tag$/,
        enforce: 'post',
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: `es2015-riot`
            }
            }
          ]
        }
      ]
  },
  resolve: {
    extensions: ['.js', '.tag']
  },
  plugins: [
      new webpack.ProvidePlugin({
      riot: 'riot'
    })
    ]
}