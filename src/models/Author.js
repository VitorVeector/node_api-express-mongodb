import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    id: String,
    name: {
        type: String,
        required: true
    },
    nacionality: {
        type: String,
        default: "Unknow"
    },
}, {versionKey: false})

export const Author = mongoose.model('Author', authorSchema)