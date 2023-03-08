import mongoose from "mongoose";

mongoose.connect("mongodb+srv://vitorveector:97984813@bookstore.6wt7aob.mongodb.net/BookStoreDB")

const db = mongoose.connection

export default db
