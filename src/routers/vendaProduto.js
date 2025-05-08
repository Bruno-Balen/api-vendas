const controller = require('../controllers/vendaProduto');

module.exports = (app) => {
  app.get('/vendas/:id/produtos', controller.GetVendasProdutosById);
  app.post('/vendas/:id/produtos', controller.PostVendaProduto);
  app.delete('/vendas/:id/produtos/:idproduto', controller.DeleteVendaProduto);
  app.put('/vendas/:id/produtos/:idproduto', controller.PutVendaProduto);
//   app.post('/vendas-produtos', controller.PostVendasProdutos);
//   app.get('/vendas-produtos/:id', controller.GetVendasProdutosById);
//   app.put('/vendas-produtos/:id', controller.PutVendasProdutos);
//   app.delete('/vendas-produtos/:id', controller.DeleteVendasProdutos);
}