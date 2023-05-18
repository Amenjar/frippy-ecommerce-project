

const Commande = require("../models/commande");


exports.createCommande = async(req,res)=>{
    
    try {
        const commande = new Commande({...req.body,user:req.user,userId:req.user._id});
        await commande.save();
        res.status(200).send({message:"commande added successfuly",commande});
    } catch (error) {
        res.status(500).send({message:"could not add comment",error});
    }
}
exports.deleteCommande = async(req,res)=>{
    const {id} = req.params;
    try {
        const commandeDeleted = await Commande.findByIdAndDelete(id);
        res.status(200).send({msg:"commande has deleted",commandeDeleted});
    } catch (error) {
        res.status(500).send({msg:error});
    }
}
exports.updatecommande = async(req,res)=>{
    const {id} = req.params;
    try {
        const commandeUpdated = await Commande.findByIdAndUpdate(id,{$set:{...req.body}});
        res.status(200).send({msg:"commande has updated",commandeUpdated});
    } catch (error) {
        res.status(500).send({msg:error});
    }
}
exports.getCommandes = async(req,res)=>{
   
    try {
        const commandes = await Commande.find();
        res.status(200).send({message:"list of commandes",commandes});
    } catch (error) {
        res.status(500).send({msg:error});
    }
}
exports.getCommande = async(req,res)=>{
    const {id} = req.params;
    try {
        const commande = await Commande.findById(id);
        res.status(200).send({message:"commande : ",commande});
    } catch (error) {
        res.status(500).send({msg:error});
    }
}