console.log("inside of review.js");

const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name is too short."],
        maxlength: [255, "Name is too long"]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"],
    },
    comment: {
        type: String,
        required: [true, "Comment is required"],
        minlength: [3, "Comment is too short."]
    }
}, {timestamps: true});

mongoose.model('Review', ReviewSchema);

module.exports = ReviewSchema;
