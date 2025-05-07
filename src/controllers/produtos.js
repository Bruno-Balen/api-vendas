const ProdutosService = require('../services/produtos');

async function GetProdutos(req, res) {
  try {
    const produtos = await ProdutosService.GetProdutos();
    return res.status(200).json({
      status: 'ok',
      data: produtos
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}

async function GetProdutosById(req, res) {
  const { id } = req.params;
  try {
    const produto = await ProdutosService.GetProdutosById(id);
    if (!produto || produto.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'Produto não encontrado'
      });
    }
    return res.status(200).json({
      status: 'ok',
      data: produto
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}

async function PostProduto(req, res) {
  try {
    const { codproduto, nome, preco, qntestoque, idcategoria } = req.body;

    if (!codproduto || !nome || !preco || !qntestoque || !idcategoria) {
      return res.status(400).json({
        status: 'error',
        message: 'Campos obrigatórios faltando'
      });
    }

    const produto = await ProdutosService.PostProduto({ codproduto, nome, preco, qntestoque, idcategoria });

    return res.status(201).json({
      status: 'ok',
      message: 'Produto cadastrado com sucesso',
      data: produto
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}

async function DeleteProduto(req, res) {
  const { id } = req.params;
  try {
    const result = await ProdutosService.GetProdutosById(id);
    if (result.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'Produto não encontrado'
      });
    }
    await ProdutosService.DeleteProduto(id);
    return res.status(200).json({
      status: 'ok',
      message: 'Produto deletado com sucesso'
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    });
  }
}

async function PutProduto(req, res) {
  const { id } = req.params;
  const { codproduto, nome, preco, qntestoque, idcategoria } = req.body;

  try {
    const produto = await ProdutosService.GetProdutosById(id);
    if (!produto || produto.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'Produto não encontrado'
      });
    }

    await ProdutosService.PutProduto(id, { codproduto, nome, preco, qntestoque, idcategoria });

    return res.status(200).json({
      status: 'ok',
      message: 'Produto atualizado com sucesso'
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
  GetProdutos,
  GetProdutosById,
  PostProduto,
  DeleteProduto,
  PutProduto
};