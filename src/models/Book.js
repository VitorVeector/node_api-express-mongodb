import mongoose from "mongoose";

const bookShema = new mongoose.Schema({
    id: String,
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    pb: {
        type: String,
        required: false
    },
    pagesNumber: {
        type: Number
    }
})


export const books = mongoose.model('books', bookShema)