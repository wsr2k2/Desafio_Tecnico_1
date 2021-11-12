const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const usuariosModel = new mongoose.Schema({
    nome: { type:String, required: true },
    login: { type: String, required: true },
    senha: {type:String, required: true },
    dataCriacao: { type: Date, default: Date.now }
});

const Usuario = mongoose.model("Usuarios", usuariosModel);

module.exports = Usuario;
