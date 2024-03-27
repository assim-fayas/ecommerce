const mongoose = require("mongoose");
const path = require('path')
require("dotenv").config()
const multer = require('multer')
const db_connect = require('./config/dbconnection')
db_connect.dbConnect()

const express = require("express");

const app = express();

const { dirname } = require('path')


//for user routes
app.use(express.static(path.join(__dirname, "assets")));
const userRoute = require("./routes/userRoute");
app.use('/', userRoute)

//for admin routes
app.use(express.static(path.join(__dirname, "assets")));
const adminRoute = require("./routes/adminRoute");
const bodyParser = require("body-parser");
app.use('/admin', adminRoute)





app.use((req, res) => {
    res.status(404).render("404")
})


app.listen(port = 3000, () => {

    console.log(`server is  running at port:${port}`);
});

