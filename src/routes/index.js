import express from 'express';
import { BookController } from '../controllers/booksControlles.js';

const routes = express.Router();

// Aqui colocaremos todas as nossas rotas com seus meétodos de requisição
routes.get('/books', BookController.getAllBooks);
routes.get('/books/:id', BookController.getBook);
routes.post('/books', BookController.postBook);
routes.put('/books/:id', BookController.putBook);
routes.delete('/books/:id', BookController.deleteBook);

export default routes;