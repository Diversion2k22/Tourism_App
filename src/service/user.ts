import { connectDatabase } from '@/database/connector';

export const getUserInfo = async () => {
    const db = await connectDatabase();
    const [rows] = await db.execute('SELECT * FROM `User`');
    return rows;
};
