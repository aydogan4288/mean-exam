const express = require("express"),
           bp = require("body-parser"),
          app = express(),
         path = require('path'),
      db_name = "restaurant",
         port = 8000;

app.use(bp.json());
app.use(express.static(__dirname + "/public/dist/public/"));

require("./server/config/mongoose")(db_name);
require("./server/config/routes")(app);

app.all('*', (req, res, next) =>{
    res.sendFile(path.resolve('./public/dist/public/index.html'));
});

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});
