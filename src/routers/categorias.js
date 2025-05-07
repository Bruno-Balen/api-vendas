const controller = require('../controllers/categorias');

module.exports = (app) => {
  app.get('/categorias', controller.GetCategorias);
  app.get('/categorias/:id', controller.GetCategoriasById);
}