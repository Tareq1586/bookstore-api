import { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
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

export default config;