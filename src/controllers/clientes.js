const clientesService = require('../services/clientes');

async function GetClientes(req, res) {
  try {
    const clientes = await clientesService.GetClientes();
    return res.status(200).json({
      status: 'ok',
      data: clientes
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}

async function GetClientesById(req, res) {
  const { id } = req.params;
  try {
    const cliente = await clientesService.GetClientesById(id);
    if (!cliente) {
      return res.status(404).json({
        status: 'error',
        message: 'Cliente não encontrado'
      });
    }
    return res.status(200).json({
      status: 'ok',
      data: cliente
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}

async function PostCliente(req, res) {
  try {
    const { idpessoa, codcliente } = req.body;

    if (!idpessoa || !codcliente) {
      return res.status(400).json({
        status: 'error',
        message: 'Campos obrigatórios faltando'
      });
    }

    const cliente = await clientesService.PostCliente({ idpessoa, codcliente });

    return res.status(201).json({
      status: 'ok',
      message: 'Cliente cadastrado com sucesso',
      data: cliente
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}

async function DeleteClientes(req, res) {
  const { id } = req.params;
  try {
    const result = await clientesService.GetClientesById(id);
    if (!result) {
      return res.status(404).json({
        status: 'error',
        message: 'Cliente não encontrado'
      });
    }
    await clientesService.DeleteClientes(id);
    return res.status(200).json({
      status: 'ok',
      message: 'Cliente deletado com sucesso',
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

async function PutCliente(req, res) {
  const { id } = req.params;
  const { codcliente } = req.body;

  if (!codcliente) {
    return res.status(400).json({
      status: 'error',
      message: 'O campo "codcliente" é obrigatório'
    });
  }

  try {
    const clienteAtualizado = await clientesService.PutCliente(id, { codcliente });

    if (!clienteAtualizado) {
      return res.status(404).json({
        status: 'error',
        message: 'Cliente não encontrado'
      });
    }

    return res.status(200).json({
      status: 'ok',
      message: 'Cliente atualizado com sucesso',
      data: clienteAtualizado
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
  GetClientes,
  GetClientesById,
  PostCliente,
  DeleteClientes,
  PutCliente
};