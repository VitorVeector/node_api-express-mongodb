import express from 'express';
import { BookController } from '../controllers/bookControllers.js';

const bookRoutes = express.Router();

bookRoutes.get('/', BookController.getAllBooks);
bookRoutes.get('/search', BookController.getBookByPublisher);
bookRoutes.get('/:id', BookController.getBook);
bookRoutes.post('/', BookController.postBook);
bookRoutes.put('/:id', BookController.putBook);
bookRoutes.delete('/:id', BookController.deleteBook);

export default bookRoutes;