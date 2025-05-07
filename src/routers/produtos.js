const controller = require('../controllers/produtos');

module.exports = (app) => {
  app.get('/produtos', controller.GetProdutos);
  app.post('/produtos', controller.PostProduto);
  app.get('/produtos/:id', controller.GetProdutosById);
  app.put('/produtos/:id', controller.PutProduto);
  app.delete('/produtos/:id', controller.DeleteProduto);
  app.get('/produtos/categoria/:idcategoria', controller.GetProdutosByCategoria);
}