require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DBhost,
    user: process.env.DBuser ,
    port: process.env.DBport,
    password: process.env.DBpassword
});

// executing connection
connection.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("connection created with mysql successfully");
    }
});