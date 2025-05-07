const db = require('../configs');

async function GetClientes() {
  const sql = `SELECT CLIENTE.*,
               PESSOA.NOME
               FROM CLIENTE
               JOIN PESSOA 
                 ON (CLIENTE.IDPESSOA = PESSOA.IDPESSOA)`;

  const queryResult = await db.query(sql);
  return queryResult.rows;
}   

async function GetClientesById(id) {
  const sql = `SELECT CLIENTE.*,
               PESSOA.NOME
               FROM CLIENTE
               JOIN PESSOA 
                 ON (CLIENTE.IDPESSOA = PESSOA.IDPESSOA)
               WHERE CLIENTE.IDCLIENTE = $1`;
  const values = [id];

  const queryResult = await db.query(sql, values);
  return queryResult.rows[0];
}

async function PostCliente(params) {
  const sql = `INSERT INTO cliente (idpessoa, datacadastro, codcliente) VALUES ($1, $2, $3) RETURNING *`;

  const { idpessoa, codcliente } = params;
  const datacadastro = new Date(); // Pega a data atual automaticamente

  const values = [idpessoa, datacadastro, codcliente];

  const queryResult = await db.query(sql, values);
  return queryResult.rows[0];
}

async function DeleteClientes(id) {
  const sql = `DELETE FROM CLIENTE WHERE IDCLIENTE = $1`;
  const values = [id];

  const queryResult = await db.query(sql, values);
  return queryResult.rows;
}

async function PutCliente(id, params) {
  const sql = `UPDATE cliente SET codcliente = $1 WHERE idpessoa = $2 RETURNING *`;

  const { codcliente } = params;
  const values = [codcliente, id];

  const queryResult = await db.query(sql, values);
  return queryResult.rows[0];
}

module.exports = {  
    GetClientes,
    GetClientesById,
    PostCliente,
    DeleteClientes,
    PutCliente
    };