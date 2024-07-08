import express from 'express';
import { getBooks, getBookById, createBook, updateBook, deleteBook, getBooksByAuthorId } from '../controllers/bookController';

const router = express.Router();

router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);
router.get('/authors/:authorId/books', getBooksByAuthorId);


export default router;