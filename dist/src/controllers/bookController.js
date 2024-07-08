"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookById = exports.getBooks = void 0;
const bookModel_1 = __importDefault(require("../models/bookModel"));
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield bookModel_1.default.getAll();
        res.json(books);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.getBooks = getBooks;
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const book = yield bookModel_1.default.getById(id);
        if (!book) {
            res.status(404).send('Book not found');
        }
        else {
            res.json(book);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.getBookById = getBookById;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBook = req.body;
        const result = yield bookModel_1.default.create(newBook);
        res.status(201).json(Object.assign({ id: result[0] }, newBook));
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.createBook = createBook;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const updatedBook = req.body;
        const result = yield bookModel_1.default.update(id, updatedBook);
        if (result === 0) {
            res.status(404).send('Book not found');
        }
        else {
            res.json(Object.assign({ id }, updatedBook));
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.updateBook = updateBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const result = yield bookModel_1.default.delete(id);
        if (result === 0) {
            res.status(404).send('Book not found');
        }
        else {
            res.status(204).send();
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.deleteBook = deleteBook;
