const db = require('../configs');

async function GetPessoas() {
  const sql = `SELECT * FROM pessoa`;  

  const queryResult = await db.query(sql);

  return queryResult.rows;
}   

async function GetPessoasById(id) {
  const sql = `SELECT * FROM pessoa WHERE idpessoa = $1`;
  const values = [id];

  const queryResult = await db.query(sql, values);

  return queryResult.rows;
}

module.exports = {
  GetPessoas,
  GetPessoasById
};