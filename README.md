# Projeto API usuários.

link do heroku: https://desafio-tecnico-mod3.herokuapp.com/

------

Projeto de uma API para cadastro de usuários em banco de dados, utilizando NodeJs, MongoDB Atlas e deploy na nuvem via Heroku.

### Intro

Nesse projeto o usuário poderá listar todos os usuários, listar por id, criar usuários, alterar usuários já cadastrados e deletar usuários cadastrados.

Para iniciar, é necessário abrir o Prompt de comando/terminal e inicializar os comandos abaixo:

```javascript
npm init
npm start
npm install dotenv
npm install express --save
npm install mongoose
```

Para a utilização da API o usuário pode escolher algum API CLIENT de sua preferência, tais como, Insomnia, Postaman, Thunder Client (VS Code).

Nesse projeto foi utilizado o Thunder Client pela sua facilidade de estar diretamente no VS Code, facilitando testes.

Criado o pacote Environment para exportação/importação e também disponibilizado a collection com todas as rotas do CRUD já definidas.

### Rotas criadas para cada ação a realizar:

##### Rota raiz: retorna a confirmação de funcionamento da API. 

```javascript
https://desafio-tecnico-mod3.herokuapp.com/
{
  "message": "Bem vindo a API usuários"
}
```

##### Rota Read: retorna a lista completa de usuários cadastrados.

`GET /read` (todos usuários);

```javascript
https://desafio-tecnico-mod3.herokuapp.com/read
[
  {
    "_id": "61904f3f07c59a735bb043d4",
    "nome": "João da Silva Santos",
    "login": "jss",
    "senha": "jss123",
    "dataCriacao": "2021-11-13T23:50:23.640Z",
    "__v": 0
  },
  {
    "_id": "61904f5507c59a735bb043d6",
    "nome": "José da Nobrega",
    "login": "zenobre",
    "senha": "zezinho",
    "dataCriacao": "2021-11-13T23:50:45.515Z",
    "__v": 0
  },
  {
    "_id": "61904f7807c59a735bb043d8",
    "nome": "Marco Antonio Silveira",
    "login": "marcoantonios",
    "senha": "marquinho2021",
    "dataCriacao": "2021-11-13T23:51:20.652Z",
    "__v": 0
  }
]
```

##### Rota read/Id: retorna o cadastro conforme o ID informado.

`GET /read/id` (usuário por id)

```javascript
https://desafio-tecnico-mod3.herokuapp.com/read/61904f7807c59a735bb043d8
{
  "_id": "61904f7807c59a735bb043d8",
  "nome": "Marco Antonio Silveira",
  "login": "marcoantonios",
  "senha": "marquinho2021",
  "dataCriacao": "2021-11-13T23:51:20.652Z",
  "__v": 0
}
```

Rota create: cria um novo usuário. (utilizar o modelo na aba BODY).

`POST /create` (criar novo usuário);

```javascript
https://desafio-tecnico-mod3.herokuapp.com/create
// usuário cadastrado:
{
  "nome": "Alex Santos Medeiros",
  "login": "alexsantos",
  "senha": "alex55sm"
}
// mensagem de confirmação:
{
  "message": "Usuário: Alex Santos Medeiros, cadastrado com sucesso!"
}
```

###### Rota update: altera um usuário já cadastrado, buscando pelo ID.

`PUT /update/id` (altera um usuário por id);

```javascript
// usuário a ser alterado = 61904f7807c59a735bb043d8
https://desafio-tecnico-mod3.herokuapp.com/update/61904f7807c59a735bb043d8
// novos dados a ser inseridos no usuário
{
  "nome": "Claudio Augusto Mendes",
  "login": "camendes",
  "senha": "mendesclaudio"
}
// mensagem de confirmação de alteração do usuário
{
  "message": "Usuário: Claudio Augusto Mendes, alterado com sucesso!"
}
```

##### Rota delete: exclui um usuário já cadastrado, buscando pelo ID.

`DELETE /delete/id` (deletar um usuário por id);

```javascript
// usuário a ser excluído = 61904f7807c59a735bb043d8
// mensagem de confirmação da exclusão do usuário
{
  "message": "Usuário excluído com sucesso!"
}

```

