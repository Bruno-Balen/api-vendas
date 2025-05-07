const pessoasRoute = require('./pessoas');
const categoriasRoutes = require('./categorias');
const clientesroutes = require('./clientes');
const funcionariosRoutes = require('./funcionarios');
const produtosRoutes = require('./produtos');

module.exports = (app) => {
  pessoasRoute(app),
  categoriasRoutes(app),
  clientesroutes(app),
  funcionariosRoutes(app),
  produtosRoutes(app);
}