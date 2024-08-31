const express = require('express');
const route = express.Router();

// controllers
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// rotas
route.get('/', homeController.index);
route.post('/contato/register', contatoController.register);
route.get('/contato/delete/:id', contatoController.delete);

module.exports = route;
