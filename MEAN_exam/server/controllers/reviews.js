console.log('inside of reviews.js');

const mongoose = require("mongoose");
const Review = mongoose.model("Review");
const Restaurant = mongoose.model("Restaurant");

class Reviews {

    addReview(req, res){
        let review = new Review(req.body);
        review.save(function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                Restaurant.findOne({_id:req.params.id}, function(err, restaurant){
                    restaurant.reviews.push(review);
                    let total = 0;
                    for (let r of restaurant.reviews){
                        total += r.rating;
                    }
                    restaurant.avgreview = total/restaurant.reviews.length;
                    restaurant.save(function(err){
                        if (err){
                            res.json({"status": 'not ok', "errors": err});
                        }
                        else{
                            res.json({"status": 'ok'});
                        }

                    })
                })
            }
        });
    }
}


module.exports = new Reviews();
