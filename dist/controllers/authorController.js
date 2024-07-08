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
exports.deleteAuthor = exports.updateAuthor = exports.createAuthor = exports.getAuthorById = exports.getAuthors = void 0;
const authorModel_1 = __importDefault(require("../models/authorModel"));
const getAuthors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield authorModel_1.default.getAll();
        res.json(authors);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.getAuthors = getAuthors;
const getAuthorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const author = yield authorModel_1.default.getById(id);
        if (!author) {
            res.status(404).send('Author not found');
        }
        else {
            res.json(author);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.getAuthorById = getAuthorById;
const createAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newAuthor = req.body;
        const result = yield authorModel_1.default.create(newAuthor);
        res.status(201).json(Object.assign({ id: result[0] }, newAuthor));
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.createAuthor = createAuthor;
const updateAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const updatedAuthor = req.body;
        const result = yield authorModel_1.default.update(id, updatedAuthor);
        if (result === 0) {
            res.status(404).send('Author not found');
        }
        else {
            res.json(Object.assign({ id }, updatedAuthor));
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.updateAuthor = updateAuthor;
const deleteAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const result = yield authorModel_1.default.delete(id);
        if (result === 0) {
            res.status(404).send('Author not found');
        }
        else {
            res.status(204).send();
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.deleteAuthor = deleteAuthor;
