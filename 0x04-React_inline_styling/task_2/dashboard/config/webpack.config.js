const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    extensions: ['.*', '.js', '.jsx'],
    alias: {
      'assets/*': path.resolve(__dirname, '../src/assets/*'),
      'components/*': path.resolve(__dirname, '../src/components/*'),
      'styles/*': path.resolve(__dirname, '../src/styles/*'),
      'utils/*': path.resolve(__dirname, '../src/utils/*'),
      'src/*': path.resolve(__dirname, '../src/*'),
    },
  },
  devServer: {
    static: path.join(__dirname, './public'),
    compress: true,
    open: true,
    hot: true,
    port: 8564,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      name: 'index.html',
      inject: false,
      template: './index.html',
    }),
  ],
};
