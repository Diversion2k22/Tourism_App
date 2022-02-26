import db from '@/database/connector';

export const getUserInfo = () => {
    const users = db!.query('SELECT * FROM User');
    return users;
};
