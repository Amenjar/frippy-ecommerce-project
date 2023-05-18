const User = require('../models/auth');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');


exports.Register = async(req,res)=>{
    const {name,email,password,picture,role} = req.body;
    try{
        const user = new User(req.body);
        // ? verify email address if exists or not
        const foundUser = await User.findOne({email});
        if(foundUser){
            return res.status(400).send({errors:[{msg:'user already exists'}]})
        }
        // ? hash password
        const salt = 10;
        const hashedPassword = bcrypt.hashSync(password, salt);
        user.password = hashedPassword;
        // ? generate token and send it to the user
        const payload = {id:user._id};
        const token = jwt.sign(payload,"Secret");               
        // ? create new User object
        if(user.role === 'livreur'){
            user.demande = 'non accepter';
            await user.save();
            return res.status(400).send({errors:[{msg:'wait acceptation of admin'}]})
        }
        await user.save();
        res.status(200).send({message:"registration successful",user});
    }catch(err){
        res.status(500).send({errors:[{msg:'could not register user'}]});
        console.log(err)
    }
}
exports.Login = async(req,res) => {
    const { name, email, password } = req.body;
    try {
      const found = await User.findOne({ email });
      //verify email if true or no
      if (!found) {
        return res.status(400).send({ errors: [{ msg: "bad credentials" }] });
      }
     
      // validation password
      const match = await bcrypt.compare(password, found.password);
      console.log(match);
      if (match == false) {
        return res.status(400).send({ errors: [{ msg: "bad credentials" }] });
      }
      if(found.demande === 'non accepter'){
        return res.status(400).send({ errors: [{ msg: "wait acceptation of admin" }] });
      }
      // generate token
      const payload = { id: found._id };
      const token = jwt.sign(payload, "Secret");
      //login
      res.status(200).send({ msg: "login with succes", found, token });
      console.log({user:found,token:token});
    } catch (error) {
      res.status(500).send({ msg: "could not login", error });
      console.log(error)
    }
}
exports.editUser = async(req,res) => {
    const {id} = req.params;
    try {
        const userUpdated = await User.findByIdAndUpdate(id,{$set:{...req.body}});
        res.status(200).send({message:"user updated successfully",userUpdated});
    } catch (error) {
        res.status(500).send({errors:[{msg:'could not update user'}]});  
    }
}
exports.getUsers = async(req,res) => {
    try {
        const users = await User.find({role: 'user'});
        const livreurs = await User.find({role: 'livreur'});
        const listOfUsers = [...users, ...livreurs];
        res.status(200).send({message:"users fetched successfully",listOfUsers});
    } catch (error) {
        res.status(500).send({errors:[{msg:'could not fetch users'}]});
    }
}
exports.deleteUser = async (req,res)=>{
    const {id} = req.params;
    try {
        const userDeleted = await User.findByIdAndDelete(id);
        res.status(200).send({message:"user deleted successfully",userDeleted});               
    } catch (error) {
        res.status(500).send({errors:[{msg:'could not delete user'}]});
    }
};
exports.getUser = async (req,res)=>{
    const {id} = req.params;
        try {
            const user = await User.findById(id);
            res.status(200).send({message:"user fetched successfully",user});
        } catch (error) {
            res.status(500).send({errors:[{msg:'could not fetch user'}]});
        }
}