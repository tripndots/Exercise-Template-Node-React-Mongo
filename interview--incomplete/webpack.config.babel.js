import webpack from 'webpack'
import path from 'path'

module.exports = {
  entry: ['./src/index.js'],
  output: {
    publicPath: '/assets/',
    path: path.resolve(__dirname, 'assets/build'),
    filename: 'app.js'
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ],
  module: {
    rules: [
      {
        test: /\.js?$/, // if js file then use this loader
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'assets'),
    inline: true
  }
}
