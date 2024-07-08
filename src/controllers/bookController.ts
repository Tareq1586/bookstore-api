import { Request, Response } from 'express';
import BookModel from '../models/bookModel';

export const getBooks = async (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = parseInt(req.query.offset as string) || 0;
    const title = req.query.title as string;

    try {
        const books = await BookModel.getAll(limit, offset, title);
        res.json(books);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const getBookById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const book = await BookModel.getById(id);
        if (!book) {
            res.status(404).send('Book not found');
        } else {
            res.json(book);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

export const createBook = async (req: Request, res: Response) => {
    try {
        const newBook = req.body;
        const result = await BookModel.create(newBook);
        res.status(201).json({ id: result[0], ...newBook });
    } catch (err) {
        res.status(500).send(err);
    }
};

export const updateBook = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const updatedBook = req.body;
        const result = await BookModel.update(id, updatedBook);
        if (result === 0) {
            res.status(404).send('Book not found');
        } else {
            res.json({ id, ...updatedBook });
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

export const deleteBook = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const result = await BookModel.delete(id);
        if (result === 0) {
            res.status(404).send('Book not found');
        } else {
            res.status(204).send();
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

export const getBooksByAuthorId = async (req: Request, res: Response) => {
    const authorId = parseInt(req.params.authorId);
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = parseInt(req.query.offset as string) || 0;

    try {
        const books = await BookModel.getByAuthorId(authorId, limit, offset);
        res.json(books);
    } catch (err) {
        res.status(500).send(err);
    }
};