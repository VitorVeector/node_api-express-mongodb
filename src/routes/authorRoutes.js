import express from 'express';
import { AuthorController } from '../controllers/authorControllers.js';

const authorRoutes = express.Router();

authorRoutes.get('/', AuthorController.getAllAuthors);
authorRoutes.get('/:id', AuthorController.getAuthor);
authorRoutes.post('/', AuthorController.postAuthor);
authorRoutes.put('/:id', AuthorController.putAuthor);
authorRoutes.delete('/:id', AuthorController.deleteAuthor);

export default authorRoutes;