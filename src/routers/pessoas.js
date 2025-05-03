const controllers = require('../controllers/pessoas');
module.exports = (app) => {
  app.get('/pessoas', controllers.GetPessoas);
}