const pessoasRoute = require('./pessoas');
const categoriasRoutes = require('./categorias');
const clientesroutes = require('./clientes');

module.exports = (app) => {
  pessoasRoute(app),
  categoriasRoutes(app),
  clientesroutes(app);
}