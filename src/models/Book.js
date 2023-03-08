import mongoose from "mongoose";

const bookShema = new mongoose.Schema({
    id: String,
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, // adiciona referência ao modelo de autor
        ref: 'Author', // nome do modelo de autor referenciado
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    pagesNumber: {
        type: Number,
        default: 0
    }
}, {versionKey: false})


export const Books = mongoose.model('Books', bookShema)