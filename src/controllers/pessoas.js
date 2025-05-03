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

async function PostPessoas(req, res) {
    try {
        if (!req.body.nome) {
          return res.status(400).json({
            status: 'error',
            message: 'Campos obrigatórios faltando'
          })
        }
        const result = await pessoas.PostPessoas(req.body);
        return res.status(201).json({
          status: 'ok',
          message: 'Pessoa cadastrada com sucesso',
          data: result
        });
      } catch (error) {
        return res.status(500).json({
          status: 'error',
          message: 'Erro do servidor',
          error: error.message
        })
      }
}

async function DeletePessoas(req, res) {
  const { id } = req.params;
  try {
    const result = await pessoas.GetPessoasById(id);
    if (!result) {
      return res.status(404).json({
        status: 'error',
        message: 'Pessoa não encontrada'
      });
    }
    pessoas.DeletePessoas(id);
    return res.status(200).json({
      status: 'ok',
      message: 'Pessoa deletada com sucesso',
      data: result
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}

async function PutPesseoas(req, res) {
  const { id } = req.params;
  const { nome, email, telefone, endereco, codpessoa, datanasc } = req.body;

  try {
    const pessoaExistente = await pessoas.GetPessoasById(id);
    if (pessoaExistente.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'Pessoa não encontrada'
      });
    }

    const pessoaAtualizada = await pessoas.PutPessoas(id, {
      nome,
      email,
      telefone,
      endereco,
      codpessoa,
      datanasc
    });

    return res.status(200).json({
      status: 'ok',
      message: 'Pessoa atualizada com sucesso',
      data: pessoaAtualizada
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
  GetPessoasById,
  PostPessoas,
  DeletePessoas,
  PutPesseoas
};