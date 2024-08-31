require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('ok');
  })
  .catch((e) => console.log(e));

const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true })); //postar form pra dentro da aplicacao
app.use(express.static(path.resolve(__dirname, 'public'))); //conteudos estaticos

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.on('ok', () => {
  app.listen(8012, () => {
    console.log('Executando server...');
    console.log('http://localhost:8012');
  });
});
