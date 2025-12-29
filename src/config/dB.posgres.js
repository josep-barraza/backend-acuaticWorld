import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

export const poolPosgres = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: String(process.env.DB_PASSWORD), 
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
});

export default poolPosgres;
