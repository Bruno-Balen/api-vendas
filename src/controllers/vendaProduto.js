const VendaProdutosService = require('../services/vendaProduto');

async function GetVendasProdutosById(req, res) {
  const { id } = req.params;
  try {
    const vendasProdutos = await VendaProdutosService.GetVendaProdutoById(id);
    if (!vendasProdutos || vendasProdutos.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'Venda não encontrada'
      });
    }
    return res.status(200).json({
      status: 'ok',
      data: vendasProdutos
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}

async function PostVendaProduto(req, res) {
  try {
    const { idproduto, quantidade, valor } = req.body;
    const { id } = req.params;

    if (!idproduto || !quantidade || !valor) {
      return res.status(400).json({
        status: 'error',
        message: 'Campos obrigatórios faltando'
      });
    }

    const vendaProduto = await VendaProdutosService.PostVendaProduto({ idproduto, quantidade, valor, idvenda: id });

    return res.status(201).json({
      status: 'ok',
      message: 'Produto adicionado à venda com sucesso',
      data: vendaProduto
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}

async function DeleteVendaProduto(req, res) {
  try {
    const { id, idproduto } = req.params;

    const vendaProduto = await VendaProdutosService.DeleteVendaProduto(id, idproduto);

    if (!vendaProduto) {
      return res.status(404).json({
        status: 'error',
        message: 'Produto não encontrado na venda'
      });
    }

    return res.status(200).json({
      status: 'ok',
      message: 'Produto removido da venda com sucesso',
      data: vendaProduto
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}

async function PutVendaProduto(req, res) {
  try {
    const { id, idproduto } = req.params;
    const { quantidade, valor } = req.body;

    if (!quantidade || !valor) {
      return res.status(400).json({
        status: 'error',
        message: 'Campos obrigatórios faltando'
      });
    }

    const vendaProduto = await VendaProdutosService.PutVendaProduto({ quantidade, valor, idvenda: id, idproduto });

    if (!vendaProduto) {
      return res.status(404).json({
        status: 'error',
        message: 'Produto não encontrado na venda'
      });
    }

    return res.status(200).json({
      status: 'ok',
      message: 'Produto da venda atualizado com sucesso',
      data: vendaProduto
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
  GetVendasProdutosById,
  PostVendaProduto,
  DeleteVendaProduto,
  PutVendaProduto
};