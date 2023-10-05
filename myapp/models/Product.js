import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
    },
    desc: {
        type: String,
        // required: true,
    },
    category: {
        type: String,
        enum: ['sneakers', 'boots', 'outdoor', 'new'],
        // required: true,
    },
    price: {
        type: Number,
        // required: true,
    },
    image: {
        type: String,
        // required: true
    },

}, {timestamps: true})

export default mongoose?.models?.Product || mongoose.model("Product", ProductSchema)