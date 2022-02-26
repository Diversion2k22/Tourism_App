import { Request, Response } from 'express';

import * as userService from '@/service/user';

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
