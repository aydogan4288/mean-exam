console.log("inside of restaurant.js");

const mongoose = require("mongoose");
const ReviewSchema = require("./review.js");

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Restaurant name is required"],
        minlength: [3, "Restaurant name must be at least 3 characters"]
    },
    cuisine_type: {
        type: String,
        required: [true, "Cuisine type is required"],
        minlength: [3, "Cuisine type must be at least 3 characters"], maxlength: 255
    },
    description: {
        type: String,
        required: [true, "You need to describe the restaurant"],
        minlength: [10, "Description must be at least 10 characters"]
    },
    reviews: [ReviewSchema],
    avgreview: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

mongoose.model('Restaurant', RestaurantSchema);
