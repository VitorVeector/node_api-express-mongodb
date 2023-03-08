import express from 'express';

import booksRoutes from './bookRoutes.js'
import authorRoutes from './authorRoutes.js';

const router = express.Router();

router.use(express.json());
router.use('/books', booksRoutes);
router.use('/authors', authorRoutes);

export default router;