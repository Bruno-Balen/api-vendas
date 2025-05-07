const controller = require('../controllers/clientes');

module.exports = (app) => { 
  app.get('/clientes', controller.GetClientes);
  app.post('/clientes', controller.PostCliente);
  app.get('/clientes/:id', controller.GetClientesById);
  app.put('/clientes/:id', controller.PutCliente);
  app.delete('/clientes/:id', controller.DeleteClientes);
}