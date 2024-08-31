const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, require: true, default: '' },
  cidade: { type: String, require: true, default: '' },
  estado: { type: String, require: true, default: '' },
  telefone: { type: Number, require: true, default: '' },
  email: { type: String, require: true, default: '' },
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
  this.body = body;
  this.errors = [];
}

// registrando contato na base de dados
Contato.prototype.register = async function () {
  this.valida();
  if (this.errors.length > 0) return;
  this.contato = await ContatoModel.create(this.body);
};

//Validando os dados do contato
Contato.prototype.valida = function () {
  //valida nome
  if (!this.body.nome) this.errors.push('Nome é um campo obrigatório');

  //valida email e telefone
  if (!this.body.email && !this.body.telefone) {
    this.errors.push('Mínimo de um contato é exigido (e-mail ou telefone)');
  }
};

//busca contatos na base de dados e ordena pela chave 'criadoEm'
Contato.buscaContatos = async function (id) {
  const contatos = await ContatoModel.find();
  return contatos;
};

//Com base no id, encontre o contato e delete
Contato.delete = async function (id) {
  if (typeof id !== 'string') return;

  const contato = await ContatoModel.findByIdAndDelete(id);
  return contato;
};

module.exports = Contato;
