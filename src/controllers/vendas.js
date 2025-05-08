const vendasSrvices = require('../services/vendas');

async function GetVendas(req, res) {
  try {
    const vendas = await vendasSrvices.GetVendas();
    return res.status(200).json({
      status: 'ok',
      data: vendas
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}

async function GetVendasById(req, res) {
  const { id } = req.params;
  try {
    const venda = await vendasSrvices.GetVendasById(id);
    if (!venda || venda.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'Venda não encontrada'
      });
    }
    return res.status(200).json({
      status: 'ok',
      data: venda
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}

async function PostVendas(req, res) {
  try {
    const { idfuncionario, idcliente, valor, data } = req.body;

    const venda = await vendasSrvices.PostVendas({ idfuncionario, idcliente, valor, data });

    return res.status(201).json({
      status: 'ok',
      message: 'Venda cadastrada com sucesso',
      data: venda
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}

async function DeleteVendas(req, res) {
  const { id } = req.params;
  try {
    const result = await vendasSrvices.GetVendasById(id);
    if (result.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'Venda não encontrada'
      });
    }
    await vendasSrvices.DeleteVendas(id);
    return res.status(200).json({
      status: 'ok',
      message: 'Venda deletada com sucesso'
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}   

async function PutVendas(req, res) {
  const { id } = req.params;
  const { idfuncionario, idcliente, valor, data } = req.body;

  try {
    const venda = await vendasSrvices.GetVendasById(id);
    if (!venda || venda.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'Venda não encontrada'
      });
    }

    await vendasSrvices.PutVendas(id, { idfuncionario, idcliente, valor, data });

    return res.status(200).json({
      status: 'ok',
      message: 'Venda atualizada com sucesso',
      data: venda
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
  GetVendas,
  GetVendasById,
  PostVendas,
  DeleteVendas,
  PutVendas
};

