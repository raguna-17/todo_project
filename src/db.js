// src/db.js
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const client = new pg.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

export async function connectDB() {
    try {
        await client.connect();
        console.log('Database connected');
    } catch (err) {
        console.error('Database connection failed:', err);
        process.exit(1);
    }
}

export { client };
