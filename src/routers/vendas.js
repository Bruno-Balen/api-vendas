const controller = require('../controllers/vendas');
const { validarDadosVenda } = require('../middlewares/ValidacoesVendas');

module.exports = (app) => {
  app.get('/vendas', controller.GetVendas);
  app.post('/vendas', validarDadosVenda, controller.PostVendas);
  app.get('/vendas/:id', controller.GetVendasById);
  app.put('/vendas/:id', controller.PutVendas);
  app.delete('/vendas/:id', controller.DeleteVendas);
//   app.get('/vendas/cliente/:idcliente', controller.GetVendasByCliente);
}