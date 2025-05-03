const moment = require('moment');

function validarCamposObrigatorios(req, res, next) {
  const { nome, email, telefone, endereco, codpessoa, datanasc } = req.body;

  if (!nome || !email || !telefone || !endereco || !codpessoa || !datanasc) {
    return res.status(400).json({
      status: 'error',
      message: 'Campos obrigatórios faltando'
    });
  }

  const codpessoaNumerico = Number(codpessoa);
  if (isNaN(codpessoaNumerico)) {
    return res.status(400).json({
      status: 'error',
      message: 'O campo "codpessoa" deve ser um número válido'
    });
  }

  req.body.codpessoa = codpessoaNumerico;

  if (!moment(datanasc, 'DD/MM/YYYY', true).isValid()) {
    return res.status(400).json({
      status: 'error',
      message: 'O campo "datanasc" deve estar no formato DD/MM/YYYY'
    });
  }

  req.body.datanasc = moment(datanasc, 'DD/MM/YYYY').format('YYYY-MM-DD');

  next();
}

module.exports = { 
  validarCamposObrigatorios
};