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

module.exports = {
  GetPessoas
};