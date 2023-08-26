import dotenv from 'dotenv'
import knex from 'knex';

dotenv.config()

const db = knex({
    client: 'mysql2',
    connection: {
    host     : 'localhost',
    user     : 'root',
    password : '4125',
    database : 'registros'
    }
})


export default db;