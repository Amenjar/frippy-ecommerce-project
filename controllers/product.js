
const Product = require('../models/Product');
const User = require('../models/auth');



exports.addProduct = async (req,res)=>{
    try {   
            const product = new Product({...req.body,userId:req.user._id});
            await product.save();
            res.status(200).send({message:"product saved successfully",product})
    } catch (error) {
        res.status(500).send({message:"server error",error});
    }
    
}
exports.deleteProduct = async (req, res) => {
    const {id} = req.params;
    try {

            const productdeleted = await Product.findByIdAndDelete(id);
            res.status(200).send({message:"product deleted successfully",productdeleted});
    } catch (error) {
        res.status(500).send({message:"server error",error});
    }
}
exports.editProduct = async(req, res) => {
    const {id} = req.params;
    try {
            const productupdated = await Product.findByIdAndUpdate(id,{$set:{...req.body}});
            res.status(200).send({message:"product updated successfully",productupdated});

    } catch (error) {
        res.status(500).send({message:"server error",error});
    }
}
exports.getProducts = async(req,res)=>{
    try {
        const products = await Product.find();
        res.status(200).send({message:'get products successfully',products});
    } catch (error) {
        res.status(500).send({message:'error server',error})
    }

}
exports.getOneProduct = async(req,res)=>{
    const {id} = req.params;
    try {
        const product = await Product.findById(id);
        res.status(200).send({message:'get one product successfully',product});
    } catch (error) {
        res.status(500).send({message:'error server',error});
    }
}