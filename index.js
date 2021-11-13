const express = require("express");  //chamando o express
const app = express();  //definindo o app como express
require('dotenv').config()
app.use(express.json());  //definindo o JSON no projeto

const Conn = require("./model/conn/index"); //importando a conexao

Conn(); //executa a func de conexao

const usuariosRouter = require("./routers/usuarios.routes");
app.use('/',usuariosRouter);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});