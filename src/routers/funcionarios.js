const controller = require('../controllers/funcionarios');


module.exports = (app) => {
  app.get('/funcionarios', controller.GetFuncionarios);
  app.post('/funcionarios', controller.PostFuncionarios);
  app.get('/funcionarios/:id', controller.GetFuncionariosById);
  app.put('/funcionarios/:id', controller.PutFuncionarios);
  app.delete('/funcionarios/:id', controller.DeleteFuncionarios);
}