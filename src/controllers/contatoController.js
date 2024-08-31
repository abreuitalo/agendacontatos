const Contato = require('../models/ContatoModel');

exports.register = async (req, res) => {
  try {
    const contato = new Contato(req.body);
    await contato.register();

    res.redirect('/');
    return;
  } catch (e) {
    console.log(e);
  }
};

exports.delete = async function (req, res) {
  if (!req.params.id) return res.send('Not found');

  const contato = await Contato.delete(req.params.id);
  if (!contato) return res.send('Contato não existe!');

  res.redirect('/');
  return;
};


