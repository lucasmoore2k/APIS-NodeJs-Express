import mongoose from "mongoose";

const ReviewsSchema = new mongoose.Schema(
    {
        name: String,
        description: String
    }, {collection : 'productInfo'}
    );

    export default ReviewsSchema;