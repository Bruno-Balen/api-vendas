const db = require('../configs');

async function GetVendaProdutoById(id) {
  const sql = `SELECT * FROM venda_produto WHERE idvenda = $1`;
  const values = [id];

  const queryResult = await db.query(sql, values);
  return queryResult.rows;
}

async function PostVendaProduto(params) {
  const sql = `INSERT INTO venda_produto (idproduto, quantidade, valor, idvenda) VALUES ($1, $2, $3, $4) RETURNING *`;

  const { idproduto, quantidade, valor, idvenda } = params;
  const values = [idproduto, quantidade, valor, idvenda];

  const queryResult = await db.query(sql, values);
  return queryResult.rows[0];
}

async function DeleteVendaProduto(idvenda, idproduto) {
  const sql = `DELETE FROM venda_produto WHERE idvenda = $1 AND idproduto = $2 RETURNING *`;
  const values = [idvenda, idproduto];

  const queryResult = await db.query(sql, values);
  return queryResult.rows[0];
}

async function PutVendaProduto(params) {
  const sql = `UPDATE venda_produto SET quantidade = $1, valor = $2 WHERE idvenda = $3 AND idproduto = $4 RETURNING *`;

  const { quantidade, valor, idvenda, idproduto } = params;
  const values = [quantidade, valor, idvenda, idproduto];

  const queryResult = await db.query(sql, values);
  return queryResult.rows[0];
}

module.exports = {
  GetVendaProdutoById,
  PostVendaProduto,
  DeleteVendaProduto,
  PutVendaProduto
};