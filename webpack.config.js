let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js'
  },

  module: {

    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },

      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/'

            }
          }
        ]
      },

    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
}

module.exports = conf;