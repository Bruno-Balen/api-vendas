const db = require('../configs');

async function GetVendas(req, res) {
  const sql = `SELECT * FROM VENDA`;

  const queryResult = await db.query(sql);
  return queryResult.rows;  
}


async function GetVendasById(id) {
  const sql = `SELECT * FROM VENDA WHERE IDVENDA = $1`;
  const values = [id];

  const queryResult = await db.query(sql, values);
  return queryResult.rows[0];
}

async function PostVendas(params) {
  const sql = `INSERT INTO venda (data, idfuncionario, valor, idcliente) VALUES ($1, $2, $3, $4) RETURNING *`;

  const { data, idfuncionario, valor, idcliente } = params; // Use a data do JSON diretamente
  const values = [data, idfuncionario, valor, idcliente];

  const queryResult = await db.query(sql, values);
  return queryResult.rows[0];
}

async function DeleteVendas(id) {
  const sql = `DELETE FROM venda WHERE IDVENDA = $1`;
  const values = [id];

  const queryResult = await db.query(sql, values);
  return queryResult.rows;
}

async function PutVendas(id, params) {
  const sql = `UPDATE venda SET data = $1, idfuncionario = $2, valor = $3, idcliente = $4 WHERE idvenda = $5 RETURNING *`;

  const { data, idfuncionario, valor, idcliente } = params;
  const values = [data, idfuncionario, valor, idcliente, id];

  const queryResult = await db.query(sql, values);
  return queryResult.rows[0];
}

module.exports = {
    GetVendas,
    GetVendasById,
    PostVendas,
    DeleteVendas,
    PutVendas
};