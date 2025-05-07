const db = require('../configs');

async function GetCategorias() {
  const sql = `SELECT * FROM CATEGORIA`;

  const queryResult = await db.query(sql);
  return queryResult.rows;
}

async function GetCategoriasById(id) {
  const sql = `SELECT * FROM CATEGORIA WHERE idcategoria = $1`;
  const values = [id];

  const queryResult = await db.query(sql, values);
  return queryResult.rows[0];
}

module.exports = {
  GetCategorias,
  GetCategoriasById
};