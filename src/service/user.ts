import { getConnection } from '@/database/connector';
export const getUserInfo = async () => {
    const db = await getConnection();
    console.log('db', db);
    const users = db!.execute('SELECT * FROM `User`');
    console.log(users);
    return users;
};
