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

module.exports = {
  GetPessoas,
  GetPessoasById,
  PostPessoas
};