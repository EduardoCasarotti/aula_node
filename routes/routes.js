const db = require("../database/conetion");
const express = require("express");
const router = express.Router();

//importação dos controlers utilizados nas rotas

const AgendasController = require("../controller/AgendasController");
const EstabelecimentosController = require("../controller/EstabelecimentosControlle");
const PessoasController = require("../controller/PessoasController");
const ServicosController = require("../controller/ServicosController");
const TelefonesController = require("../controller/TelefonesController");

//Definindo as rotas

router.get("/Agendas", AgendasController.listarAgendas);
//cadastrar
//editar
//excluir
module.exports = router;

router.get(
  "/Estabelecimentos",
  EstabelecimentosController.listarEstabelecimentos
);
//cadastrar
//editar
//excluir
module.exports = router;

router.get("/Pessoas", PessoasController.listarPessoas);
//cadastrar
//editar
//excluir
module.exports = router;

router.get("/Serviços", ServicosController.listarServicos);
//cadastrar
//editar
//excluir
module.exports = router;

router.get("/Telefones", TelefonesController.listarTelefones);
//cadastrar
//editar
//excluir
module.exports = router;
