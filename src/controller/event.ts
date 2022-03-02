import { Request, Response } from 'express';
import { connectDatabase } from '@/database/connector';

/**
 * Gets the User information.
 *
 * @param {Request} req
 * @param {Response} res
 */
export const getEvent = async (req: Request, res: Response) => {
    try {
        const db = await connectDatabase();
        const query = `SELECT * FROM travelr_event`;
        const [result] = await db.execute(query);
        return res.json({ is_successful: true, events: result });
    } catch (err) {
        return res.status(500).json({ is_successful: false, message: err.message });
    }
};
