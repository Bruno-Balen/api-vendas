const controllers = require('../controllers/pessoas');
const validacoesPessoas = require('../middlewares/validacoesPessoas');

module.exports = (app) => {
  app.get('/pessoas', controllers.GetPessoas);
  app.get('/pessoas/:id', controllers.GetPessoasById);
  app.post('/pessoas', validacoesPessoas.validarCamposObrigatorios, controllers.PostPessoas);
  app.put('/pessoas/:id', controllers.PutPesseoas);
  app.delete('/pessoas/:id', controllers.DeletePessoas);
};