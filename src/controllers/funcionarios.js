const funcionariosServices = require('../services/funcionarios');

async function GetFuncionarios(req, res) {
  try {
    const funcionarios = await funcionariosServices.GetFuncionarios();
    return res.status(200).json({
      status: 'ok',
      data: funcionarios
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }  
}

async function GetFuncionariosById(req, res) {
  const { id } = req.params;
  try {
    const funcionario = await funcionariosServices.GetFuncionariosById(id);
    if (funcionario.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'Funcionário não encontrado'
      });
    }
    return res.status(200).json({
      status: 'ok',
      data: funcionario
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}

async function PostFuncionarios(req, res) {
  try {
    const { salario, cargo, idpessoa, codfuncionario } = req.body;

    if (!idpessoa || !codfuncionario || !salario || !cargo) {   
      return res.status(400).json({
        status: 'error',
        message: 'Campos obrigatórios faltando'
      });
    }

    const funcionario = await funcionariosServices.PostFuncionarios({ salario, cargo, idpessoa, codfuncionario });

    return res.status(201).json({
      status: 'ok',
      message: 'Funcionário cadastrado com sucesso',
      data: funcionario
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}

async function DeleteFuncionarios(req, res) {
  const { id } = req.params;
  try {
    const result = await funcionariosServices.GetFuncionariosById(id);
    if (result.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'Funcionário não encontrado'
      });
    }
    await funcionariosServices.DeleteFuncionarios(id);
    return res.status(200).json({
      status: 'ok',
      message: 'Funcionário deletado com sucesso'
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}

async function PutFuncionarios(req, res) {
  const { id } = req.params;
  const { salario, cargo } = req.body;

  if (!salario || !cargo) {
    return res.status(400).json({
      status: 'error',
      message: 'Os campos "salario" e "cargo" são obrigatórios'
    });
  }

  try {
    const funcionarioAtualizado = await funcionariosServices.PutFuncionarios(id, { salario, cargo });

    if (!funcionarioAtualizado) {
      return res.status(404).json({
        status: 'error',
        message: 'Funcionário não encontrado'
      });
    }

    return res.status(200).json({
      status: 'ok',
      message: 'Funcionário atualizado com sucesso',
      data: funcionarioAtualizado
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
  GetFuncionarios,
  GetFuncionariosById,
  PostFuncionarios,
  DeleteFuncionarios,
  PutFuncionarios
};