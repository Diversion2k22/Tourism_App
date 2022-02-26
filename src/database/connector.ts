import CONFIG from '@/config';
import mysql from 'mysql2';

export const connectDatabase = async () => {
  const db = mysql.createConnection({
    host: CONFIG.DB.HOST,
    user: CONFIG.DB.USER,
    password: CONFIG.DB.PASSWORD,
    port: CONFIG.DB.PORT,
    database: CONFIG.DB.DATABASE,
    multipleStatements: true, // Prevent nested sql statements
    connectTimeout: 60 * 60 * 1000,
    decimalNumbers: true,
    // debug: true,
  });
  if (db) {
    console.log('Database Connected !');
    return db;
  }
  else console.log('Database Not Connected !');
};
