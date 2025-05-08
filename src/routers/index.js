const pessoasRoute = require('./pessoas');
const categoriasRoutes = require('./categorias');
const clientesroutes = require('./clientes');
const funcionariosRoutes = require('./funcionarios');
const produtosRoutes = require('./produtos');
const vendasRoutes = require('./vendas');
const vendasProdutosRoutes = require('./vendaProduto');

module.exports = (app) => {
  pessoasRoute(app),
  categoriasRoutes(app),
  clientesroutes(app),
  funcionariosRoutes(app),
  produtosRoutes(app),
  vendasRoutes(app),
  vendasProdutosRoutes(app);
}