const express = require("express"); //import do express
const router = express.Router(); //define app como express
const Usuario = require("./../model/usuarios"); // import do modelo usuário

// rota raiz para testar conexão da API
router.get('/', (req,res) => {
    res.status(200).json({message:"Bem vindo a API usuários"});
});

// rota para listar todos cadastros
router.get('/read', async (req,res) => {
    await Usuario.find({}).then((usuarios) => {
        res.status(200).json(usuarios);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
    });
});

// rota para buscar por ID
router.get("/read/:id", async (req,res) => {
    try{
        const id = req.params.id;
        if(!req.params.id){
            res.status(404).json({message: "Usuário não encontrado"});
            return;
        } else{
        const usuario = await Usuario.findById(id);
        res.status(200).json(usuario)
        }
    } catch (err) {
        res.status(204).json({message: "Usuário não encontrado"})
    }
});

// rota POST para cadastrar novos usuários
router.post("/create", async (req,res) => {
    try {
        
        const usuario = req.body;
        
        // validação para não permitir que tenham campos em branco
        if(!usuario.nome){
            res.status(400).json({message:"Preencha o nome!"});
            return;
        }
        if(!usuario.login){
            res.status(400).json({message:"Preencha o login!"});
            return;
        }
        if(!usuario.senha){
            res.status(400).json({message:"Preencha a senha!"});
            return;
        }
        const cadastro = await new Usuario(usuario).save();
        res.status(201).json({message: `Usuário: ${usuario.nome}, cadastrado com sucesso!`});
    } catch(err) {
        res.status(400).json({message: "Algo deu errado!"})
    }
})

//rota PUT para alteração de usuário por ID
router.put("/update/:id", async (req,res) => {
    const id = req.params.id;
    
        if(!req.body.nome){
                res.status(400).json({message:"Preencha o nome!"});
                return;
            }
            if(!req.body.login){
                res.status(400).json({message:"Preencha login!"});
                return;
            }
            if(!req.body.senha){
                res.status(400).json({message:"Preencha a senha!"});
                return;
            }

        await Usuario.updateOne({ _id:id}, req.body).then(() =>{
        
            res.status(200).json({message: `Usuário: ${req.body.nome}, alterado com sucesso!`});
    
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "Usuário não encontrado, digite a ID corretamente."})
    })
})

// rota DELETE para deleção de usuário por ID
router.delete("/delete/:id", async (req,res) => {
    if(req.params.id.length == 24){
        await Usuario.deleteOne({_id:req.params.id}).then(() => {
        res.status(200).json({message: `Usuário excluído com sucesso!`});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "algo deu errado"});
    });
}else{
    res.status(400).json({message: "id precisa ter 24 caracteres"});
}
});

module.exports = router;