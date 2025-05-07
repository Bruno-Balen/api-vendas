const db = require('../configs');

async function GetFuncionarios() {
  const sql = `SELECT FUNCIONARIOS.*,
               PESSOA.NOME
               FROM FUNCIONARIOS
               JOIN PESSOA 
                 ON (FUNCIONARIOS.IDPESSOA = PESSOA.IDPESSOA)`;

  const queryResult = await db.query(sql);
  return queryResult.rows;
}

async function GetFuncionariosById(id) {
  const sql = `SELECT FUNCIONARIOS.*,
               PESSOA.NOME
               FROM FUNCIONARIOS
               JOIN PESSOA 
                 ON (FUNCIONARIOS.IDPESSOA = PESSOA.IDPESSOA)
               WHERE FUNCIONARIOS.IDFUNCIONARIO = $1`;
  const values = [id];

  const queryResult = await db.query(sql, values);
  return queryResult.rows[0];
}

async function PostFuncionarios(params) {
  const sql = `INSERT INTO FUNCIONARIOS (salario, cargo, idpessoa, datacadastro, codfuncionario) VALUES ($1, $2, $3, $4, $5) RETURNING *`;

  const {salario, cargo,  idpessoa, codfuncionario } = params;
  const datacadastro = new Date(); // Pega a data atual automaticamente

  const values = [salario, cargo,  idpessoa, datacadastro, codfuncionario];

  const queryResult = await db.query(sql, values);
  return queryResult.rows[0];
}

async function DeleteFuncionarios(id) {
  const sql = `DELETE FROM FUNCIONARIOS WHERE IDFUNCIONARIO = $1`;
  const values = [id];

  const queryResult = await db.query(sql, values);
  return queryResult.rows;
}

async function PutFuncionarios(id, params) {
  const sql = `UPDATE funcionarios SET salario = $1, cargo = $2 WHERE idfuncionario = $3 RETURNING *`;

  const { salario, cargo } = params;
  const values = [salario, cargo, id];

  const queryResult = await db.query(sql, values);
  return queryResult.rows[0];
}

module.exports = {
  GetFuncionarios,
  GetFuncionariosById,
  PostFuncionarios,
  DeleteFuncionarios,
  PutFuncionarios
}