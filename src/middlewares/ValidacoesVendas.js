function validarDadosVenda(req, res, next) {
  const { idfuncionario, idcliente, valor, data } = req.body;

  if (!idfuncionario || !idcliente || !valor || !data) {
    return res.status(400).json({
      status: 'error',
      message: 'Campos obrigatórios faltando'
    });
  }

  // Validação adicional para o campo "data"
  const dataRegex = /^\d{4}[-/]\d{2}[-/]\d{2}$/; // Aceita YYYY-MM-DD ou YYYY/MM/DD
  if (!dataRegex.test(data)) {
    return res.status(400).json({
      status: 'error',
      message: 'O campo "data" deve estar no formato YYYY-MM-DD'
    });
  }

  req.body.data = new Date(data).toISOString().split('T')[0]; // Converte para o formato YYYY-MM-DD

  next();
}

module.exports = {
  validarDadosVenda
};