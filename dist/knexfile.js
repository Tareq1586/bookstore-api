"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    development: {
        client: 'mysql2',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'bookstore'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './src/migrations'
        },
        seeds: {
            directory: './src/seeds'
        }
    }
};
exports.default = config;
