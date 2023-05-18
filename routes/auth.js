const express = require('express');
const { RegisterValidation, Validation, LoginValidation } = require('../middlewares/Register');
const { Register, Login, getUsers, editUser, deleteUser, getUser } = require('../controllers/auth');
const { isAuth } = require('../middlewares/isAuth');

const authRoutes = express.Router();


authRoutes.post('/register',RegisterValidation,Validation,Register);
authRoutes.post('/login',LoginValidation,Validation,Login);
authRoutes.get("/current", isAuth, (req, res) => res.send(req.user));
authRoutes.get("/users",isAuth,getUsers);
authRoutes.get("/users/:id",isAuth,getUser);
authRoutes.put("/modifier/:id",isAuth,editUser);
authRoutes.delete("/delete/:id",isAuth,deleteUser);

module.exports = authRoutes;