const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const extractSass = new MiniCssExtractPlugin({
  filename: '/css/index.css'
})

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {         
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  plugins: [extractSass]
}
