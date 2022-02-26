import CONFIG from '@/config';
import mysql from 'mysql2';

let db: mysql.Connection | undefined = undefined;
export const connectDatabase = async () => {
  db = mysql.createConnection({
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

export default db;
