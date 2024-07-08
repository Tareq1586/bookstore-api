import db from '../config/db';

interface Book {
    id?: number;
    title: string;
    author_id?: number;
    description?: string;
}

const BookModel = {
    getAll: async (limit: number, offset: number, title?: string) => {
        let query = db('books')
            .leftJoin('authors', 'books.author_id', 'authors.id')
            .select('books.*', 'authors.name as author_name')
            .limit(limit)
            .offset(offset);
        if (title) {
            query = query.where('books.title', 'like', `%${title}%`);
        }
        return query;
    },

    getByAuthorId: async (authorId: number, limit: number, offset: number) => {
        return db('books')
            .where({ author_id: authorId })
            .select('books.*')
            .limit(limit)
            .offset(offset);
    },
    getById: async (id: number) => {
        return db('books')
            .leftJoin('authors', 'books.author_id', 'authors.id')
            .select('books.*', 'authors.name as author_name')
            .where('books.id', id)
            .first();
    },
    create: async (book: Book) => {
        return db('books').insert(book);
    },
    update: async (id: number, book: Book) => {
        return db('books').where({ id }).update(book);
    },
    delete: async (id: number) => {
        return db('books').where({ id }).del();
    }
};

export default BookModel;