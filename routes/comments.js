const express = require("express");

const { isAuth } = require('../middlewares/isAuth');
const { createComments, deleteComments, updateComments, getComments } = require("../controllers/comments");
const commentsRoute = express.Router();

commentsRoute.post("/:id",isAuth,createComments);
commentsRoute.delete("/delete/:id",isAuth,deleteComments);
commentsRoute.put("/update/:id",isAuth,updateComments);
commentsRoute.get("/",isAuth,getComments);


module.exports = commentsRoute;