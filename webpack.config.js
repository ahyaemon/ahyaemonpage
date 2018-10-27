const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: "development",
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dest'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      "@pages": path.resolve(__dirname, './src/pages'),
      "@components": path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  cache: true,
  externals: {
    "vue": "Vue",
    "vue-router": "VueRouter",
  }
}