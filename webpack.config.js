const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/pages/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт

    open: true // сайт будет открываться сам при запуске npm run dev
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'My App',
        template: './src/index.html'
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
],
devtool: 'inline-source-map',
module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
        {
            test: /\.css$/i,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                // добавьте объект options
                options: { importLoaders: 1 }
              },
              "postcss-loader"
            ],
          },    
    {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource'

      },
    ],
  },
};