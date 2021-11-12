const express = require("express");  //chamando o express
const app = express();  //definindo o app como express

app.use(express.json());  //definindo o JSON no projeto

const Conn = require("./model/conn/index"); //importando a conexao

Conn(); //executa a func de conexao

const port = 3000; //porta do node

app.get("/", (req, res) => {
    res.status(200).json({ message: "Pagina inicial" });
  });
  

const usuariosRouter = require("./routers/usuarios.routes");
app.use('/usuarios',usuariosRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});