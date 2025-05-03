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

async function PostPessoas(params) {
  const sql = `INSERT INTO pessoa (nome, email, datanasc, telefone, codpessoa) VALUES ($1, $2, $3, $4, $5)`;

  const { nome, email, datanasc, telefone, codpessoa } = params;

  if (isNaN(parseInt(codpessoa, 10))) {
    throw new Error('O campo codpessoa deve ser um número válido');
  }

  const values = [nome, email, datanasc, telefone, parseInt(codpessoa, 10)];

  const queryResult = await db.query(sql, values);
  return queryResult.rows;
}

async function DeletePessoas(id) {
  const sql = `DELETE FROM pessoa WHERE idpessoa = $1`;
  const values = [id];

  const queryResult = await db.query(sql, values);
  return queryResult.rows;
}

async function PutPessoas(id, params) {
  const sql = `UPDATE pessoa SET nome = $1, email = $2, telefone = $3, codpessoa = $4, datanasc = $5 WHERE idpessoa = $6 RETURNING *`;

  const { nome, email, telefone,  codpessoa, datanasc } = params;
  const values = [nome, email, telefone, codpessoa, datanasc, id];

  const queryResult = await db.query(sql, values);
  return queryResult.rows[0];
}

module.exports = {
  GetPessoas,
  GetPessoasById,
  PostPessoas,
  DeletePessoas,
  PutPessoas
};