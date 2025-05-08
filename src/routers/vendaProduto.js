const controller = require('../controllers/vendaProduto');

module.exports = (app) => {
  app.get('/vendas/:id/produtos', controller.GetVendasProdutosById);
  app.post('/vendas/:id/produtos', controller.PostVendaProduto);
  app.delete('/vendas/:id/produtos/:idproduto', controller.DeleteVendaProduto);
  app.put('/vendas/:id/produtos/:idproduto', controller.PutVendaProduto);
}