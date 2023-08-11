const { json } = require("express");
const db = require("../database/conection");

module.exports ={
    async listarEstabelecimentos(request, response) {
        try{
            return response.status(200).json({confirma: "Estabelecimentor"});
        } catch (error) {
            return response.status(500).json({confirma: "Erro" , message: error});
        }
    },
};