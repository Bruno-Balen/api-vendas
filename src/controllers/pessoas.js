const pessoas = require('../services/pessoas');

async function GetPessoas(req, res) {
  try {
    const pesseoas = await pessoas.GetPessoas();
    return res.status(200).json({
        status: 'ok',
        data: pesseoas});

  } catch (error) {
    return res.status(500).json({
        status: 'error',
        message: 'Erro do servidor',
        error: error.message})
    }
}

async function GetPessoasById(req, res) {
  const { id } = req.params;
  try {
    const pessoa = await pessoas.GetPessoasById(id);
    if (pessoa.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'Pessoa não encontrada'
      });
    }
    return res.status(200).json({
      status: 'ok',
      data: pessoa
    });
    
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}

module.exports = {
  GetPessoas,
  GetPessoasById
};