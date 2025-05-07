const db = require('../configs');

async function GetProdutos(req, res) {
  const sql = `SELECT * FROM PRODUTO`;

  const queryResult = await db.query(sql);
  return queryResult.rows;  
}

async function GetProdutosById(id) {
  const sql = `SELECT * FROM PRODUTO WHERE IDPRODUTO = $1`;
  const values = [id];

  const queryResult = await db.query(sql, values);
  return queryResult.rows[0];
}

async function PostProduto(params) {
  const sql = `INSERT INTO produto (codproduto, nome, preco, qntestoque, idcategoria) VALUES ($1, $2, $3, $4, $5) RETURNING *`;

  const { codproduto, nome, preco, qntestoque, idcategoria } = params;
  const values = [codproduto, nome, preco, qntestoque, idcategoria];

  const queryResult = await db.query(sql, values);
  return queryResult.rows[0];
}

async function DeleteProduto(id) {
  const sql = `DELETE FROM produto WHERE IDPRODUTO = $1`;
  const values = [id];

  const queryResult = await db.query(sql, values);
  return queryResult.rows;
}

async function PutProduto(id, params) {
  const sql = `UPDATE produto SET codproduto = $1, nome = $2, preco = $3, qntestoque = $4, idcategoria = $5 WHERE idproduto = $6 RETURNING *`;

  const { codproduto, nome, preco, qntestoque, idcategoria } = params;
  const values = [codproduto, nome, preco, qntestoque, idcategoria, id];

  const queryResult = await db.query(sql, values);
  return queryResult.rows[0];
}



module.exports = { 
    GetProdutos,
    GetProdutosById,
    PostProduto,
    DeleteProduto,
    PutProduto
 };