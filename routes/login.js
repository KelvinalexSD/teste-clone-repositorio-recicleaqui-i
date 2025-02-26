// Importação do módulo 'express' para criação de um servidor web
const express = require("express");

// Criação de um novo roteador usando o método Router() do Express
const router = express.Router();

// Definição da rota para o caminho raiz ('/') usando o método GET
router.get("/", function (req, res) {
    // Renderização do template 'login' com os dados passados ({ title: "RecicleAqui - Login" })
    res.render("login", { title: "RecicleAqui - Login" });
})

// Exportação do roteador para uso em outros arquivos
module.exports = router;
