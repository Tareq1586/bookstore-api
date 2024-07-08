import { Request, Response } from 'express';
import AuthorModel from '../models/authorModel';

export const getAuthors = async (req: Request, res: Response) => {
    try {
        const authors = await AuthorModel.getAll();
        res.json(authors);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const getAuthorById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const author = await AuthorModel.getById(id);
        if (!author) {
            res.status(404).send('Author not found');
        } else {
            res.json(author);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

export const createAuthor = async (req: Request, res: Response) => {
    try {
        const newAuthor = req.body;
        const result = await AuthorModel.create(newAuthor);
        res.status(201).json({ id: result[0], ...newAuthor });
    } catch (err) {
        res.status(500).send(err);
    }
};

export const updateAuthor = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const updatedAuthor = req.body;
        const result = await AuthorModel.update(id, updatedAuthor);
        if (result === 0) {
            res.status(404).send('Author not found');
        } else {
            res.json({ id, ...updatedAuthor });
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

export const deleteAuthor = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const result = await AuthorModel.delete(id);
        if (result === 0) {
            res.status(404).send('Author not found');
        } else {
            res.status(204).send();
        }
    } catch (err) {
        res.status(500).send(err);
    }
};