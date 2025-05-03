const db = require('../configs');

async function GetPessoas() {
  const sql = `SELECT * FROM pessoa`;  

  const queryResult = await db.query(sql);

  return queryResult.rows;
}   

module.exports = {
  GetPessoas
};