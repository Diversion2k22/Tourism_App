import { Request, Response } from 'express';

import * as userService from '@/service/user';
import { connectDatabase } from '@/database/connector';

/**
 * Gets the User information.
 *
 * @param {Request} req
 * @param {Response} res
 */
export const getUserInfo = async (req: Request, res: Response) => {
    const result = await userService.getUserInfo();
    res.json(result);
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const { user_id, name, email, phone_number } = req.body;
        if (!name || !email || !phone_number || !user_id) {
            return res
                .status(400)
                .json({ is_successful: false, message: 'Bad Request' });
        }
        // check for valid email
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            return res
                .status(400)
                .json({ is_successful: false, message: 'Invalid Email' });
        }
        // check for valid phone number
        if (!/^\d{10}$/.test(phone_number)) {
            return res.status(400).json({
                is_successful: false,
                message: 'Invalid Phone Number',
            });
        }
        const db = await connectDatabase();
        const query = `INSERT INTO users (user_id, name, email, phone_number) VALUES (?,?,?,?)`;
        await db.execute(query, [user_id, name, email, phone_number]);
        return res.json({ is_successful: true, message: 'User Created' });
    } catch (err) {
        return res
            .status(500)
            .json({ is_successful: false, message: err.message });
    }
};
