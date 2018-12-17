console.log ("inside of routes.js");

const Restaurants = require("../controllers/restaurants");
const Reviews = require("../controllers/reviews");

module.exports = function(app){
    app.get("/restaurants", Restaurants.getAll);
    app.get("/restaurant/:id", Restaurants.getId);
    app.post("/restaurant", Restaurants.create);
    app.post('/restaurant/:id/review', Reviews.addReview);
    app.put('/restaurant/:id', Restaurants.update);
    app.delete('/restaurant/:id', Restaurants.delete);
};
