const { json } = require("express");
const db = require("../database/conection");

module.exports ={
    async listarServicos(request, response) {
        try{
            return response.status(200).json({confirma: "Serviços"});
        } catch (error) {
            return response.status(500).json({confirma: "Erro" , message: error});
        }
    },
};