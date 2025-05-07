const categoriasService = require('../services/categorias');

async function GetCategorias(req, res) {
  try {
    const categorias = await categoriasService.GetCategorias();
    return res.status(200).json({
        status: 'ok',
        data: categorias});
  } catch (error) {
    return res.status(500).json({
        status: 'error',
        message: 'Erro do servidor',
        error: error.message})
    }
}

async function GetCategoriasById(req, res) {
  const { id } = req.params;
  try {
    const categoria = await categoriasService.GetCategoriasById(id);
    if (!categoria) {
      return res.status(404).json({
        status: 'error',
        message: 'Categoria não encontrada'
      });
    }
    return res.status(200).json({
      status: 'ok',
      data: categoria
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
  GetCategorias,
  GetCategoriasById
};