const path = require('path'); //CommonJS

module.exports = {
  mode: 'production', //modo
  entry: './frontend/main.js', //arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js', //arquivo de saida
  },
  devServer: {
    contentBase: './build',
  },
  module: {
    rules: [
      //regras
      {
        exclude: /node_modules/, //excluir
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
          },
        },
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map', //mapeamento de erros... em determinado arquivo
};
