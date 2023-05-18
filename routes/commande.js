const express = require("express");
const { isAuth } = require('../middlewares/isAuth');
const { createCommande, deleteCommande, updatecommande, getCommandes, getCommande } = require("../controllers/commande");




const commandesRoute = express.Router();

commandesRoute.post("/commande",isAuth,createCommande);
commandesRoute.delete("/delete/:id",isAuth,deleteCommande);
commandesRoute.put("/update/:id",isAuth,updatecommande);
commandesRoute.get("/",isAuth,getCommandes);
commandesRoute.get("/commande/:id",isAuth,getCommande);




module.exports = commandesRoute;