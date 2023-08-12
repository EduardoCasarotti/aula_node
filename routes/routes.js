const db = require("../database/conection");
const express = require("express");
const router = express.Router();

//importação dos controlers utilizados nas rotas

const AgendasController = require("../controller/AgendasController");
const EstabelecimentosController = require("../controller/EstabelecimentosController");
const PessoasController = require("../controller/PessoasController");
const ServicosController = require("../controller/ServicosController");
const TelefonesController = require("../controller/TelefonesController");

//Definindo as rotas

router.get("/Agendas", AgendasController.listarAgendas);
router.post("/Agendas", AgendasController.CadastroAgendas);
router.patch("/Agendas", AgendasController.EditarAgendas);
router.delete("/Agendas", AgendasController.ExcluirAgendas);

module.exports = router;

router.get("/Estabelecimentos",EstabelecimentosController.listarEstabelecimentos);
router.post("/Estabelecimentos",EstabelecimentosController.CadastroEstabelecimentos);
router.patch("/Estabelecimentos",EstabelecimentosController.EditarEstabelecimentos);
router.delete("/Estabelecimentos",EstabelecimentosController.ExcluirEstabelecimentos);

module.exports = router;

router.get("/Pessoas", PessoasController.listarPessoas);
router.post("/Pessoas", PessoasController.CadastroPessoas);
router.patch("/Pessoas", PessoasController.EditarPessoas);
router.delete("/Pessoas", PessoasController.ExcluirPessoas);

module.exports = router;

router.get("/Servicos", ServicosController.listarServicos);
router.post("/Servicos", ServicosController.CadastroServicos);
router.patch("/Servicos", ServicosController.EditarServicos);
router.delete("/Servicos", ServicosController.ExcluirServicos);

module.exports = router;

router.get("/Telefones", TelefonesController.listarTelefones);
router.post("/Telefones", TelefonesController.CadastroTelefones);
router.patch("/Telefones", TelefonesController.EditarTelefones);
router.delete("/Telefones", TelefonesController.ExcluirPessoas);

module.exports = router;
