const pessoasRoute = require('./pessoas');
const categoriasRoutes = require('./categorias');

module.exports = (app) => {
  pessoasRoute(app),
  categoriasRoutes(app);
}