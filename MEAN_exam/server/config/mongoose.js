console.log("inside of mongoose.js");

module.exports = function (db_name){
    const mongoose = require("mongoose");
    const fs = require("fs");
    const path = require("path");
    mongoose.connect('mongodb://localhost/' + db_name, { useNewUrlParser: true });

    for(let file of fs.readdirSync(path.join(__dirname, "../models"))){
        if(file.endsWith(".js")){
            require(path.join(__dirname, "../models", file));
        }
    }
};
