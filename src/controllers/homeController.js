//importando o model (function construtora)
const Contato = require('../models/ContatoModel');

//atribuindo os contatos a const contatos e passando como objeto/argumento na renderizacao
exports.index = async (req, res) => {
  try {
    const contatos = await Contato.buscaContatos();
    return res.render('home', { contatos });
    // return res.render('home', { contatos });
    // console.log('teste');
  } catch (e) {
    const contatos = {};
    console.log(e);
  }
};
