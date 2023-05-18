

const Comment = require("../models/comments");


exports.createComments = async(req,res)=>{
    const {id} = req.params;
    try {
        const comment = new Comment({...req.body,user:req.user,userId:req.user._id,ProductId:id});
        await comment.save();
        res.status(200).send({message:"comments added successfuly",comment});
    } catch (error) {
        res.status(500).send({message:"could not add comment",error});
    }
}
exports.deleteComments = async(req,res)=>{
    const {id} = req.params;
    try {
        const commentDeleted = await Comment.findByIdAndDelete(id);
        res.status(200).send({msg:"comment has deleted",commentDeleted});
    } catch (error) {
        res.status(500).send({msg:error});
    }
}
exports.updateComments = async(req,res)=>{
    const {id} = req.params;
    try {
        const commentUpdated = await Comment.findByIdAndUpdate(id,{$set:{...req.body}});
        res.status(200).send({msg:"comment has updated",commentUpdated});
    } catch (error) {
        res.status(500).send({msg:error});
    }
}
exports.getComments = async(req,res)=>{
   
    try {
        const comments = await Comment.find();
        res.status(200).send({message:"list of comments",comments});
    } catch (error) {
        res.status(500).send({msg:error});
    }
}