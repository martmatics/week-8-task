const express = require('express');
const app = express();
const port = process.env.PORT || 4700;
const dotenv = require('dotenv');
dotenv.config({path: './root.env'});

//connect to database
const DB = require('./db')

//bodyparser
app.use(express.json());

//import routes
 const userroute = require("./routers/userroutes");

//auth middleware
 app.use('/api', userroute);
 
app.listen(port, () => console.log(`server running on ${port}`));