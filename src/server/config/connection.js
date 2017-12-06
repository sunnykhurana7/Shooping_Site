const Mongoose = require('mongoose');

// connect to the database
Mongoose.connect("mongodb://localhost/shopping_site");

(() => {

    Mongoose.connection.on("open",(err, data) => {
        console.log("Connection Successfully Created..")
    });

    Mongoose.connection.on("error", (err, data) => {
        console.log("Error On Connection Created");
    });

})();