require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();
const db = require('./configs');
const PORT = process.env.PORT;

app.use(express.json());
//configuração para urtilizar o sweeger.
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

require('./routers')(app);

app.listen(PORT, () => {
  console.log(`API Rodando na porta ${PORT}`)
});