const express = require('express');
const authRoutes = require('./routes/auth');

const productRoutes = require('./routes/product');
const ConnectDB = require('./config/connectDb');
const commentsRoute = require('./routes/comments');
const commandesRoute = require('./routes/commande');
require("dotenv").config();
const app = express();
app.use(express.json());
ConnectDB();
app.use("/api/auth",authRoutes);
app.use("/api/product",productRoutes);
app.use("/api/comments",commentsRoute);
app.use("/api/commandes",commandesRoute);

const port = 2000;
app.listen(port, ()=>{console.log(`server listening on port ${port}`);});