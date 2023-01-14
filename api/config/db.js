import { createPool } from "mysql2/promise";
import "dotenv/config";

const config = {
    host: process.env.DB_HOST,
    port:process.env.DB_PORT,
    database:process.env.DB_DATABASE,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    charset:process.env.DB_CHARSET,
    multipleStatements: true,
}

class DB {
    // create pool
    static #pool = createPool(config);
    static getConnection = async () => {
        try {
            const connection = await DB.#pool.getConnection(async conn => conn);
            return connection;
        } catch (err) {
            console.log(err);
        }
    }
}

export default DB;