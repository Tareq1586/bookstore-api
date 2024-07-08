import db from '../config/db';

interface Author {
    id?: number;
    name: string;
    bio?: string;
}

const AuthorModel = {
    getAll: async () => {
        return db('authors').select('*');
    },
    getById: async (id: number) => {
        return db('authors').select('*').where({ id }).first();
    },
    create: async (author: Author) => {
        return db('authors').insert(author);
    },
    update: async (id: number, author: Author) => {
        return db('authors').where({ id }).update(author);
    },
    delete: async (id: number) => {
        return db('authors').where({ id }).del();
    }
};

export default AuthorModel;