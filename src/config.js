import dotenv from "dotenv";
dotenv.config();

export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "postgres";
export const DB_PASSWORD = process.env.DB_PASSWORD || "mysecretpassword";
export const DB_DATABASE = process.env.DB_DATABASE || "investments";
export const DB_PORT = process.env.DB_PORT || 5432;
