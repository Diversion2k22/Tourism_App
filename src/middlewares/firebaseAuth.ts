import express from 'express';
import admin from 'firebase-admin';

export const authenticate = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    const idToken = req.headers.authorization;

    //Fail if token not present in header.
    if (!idToken) return res.status(401).json({ message: 'Unauthorized' });
    admin
        .auth()
        .verifyIdToken(idToken)
        .then((userDetails) => {
            req.body['auth'] = userDetails;
            next();
        })
        .catch((err) => {
            console.log(err);
            return res.status(401).json({ message: 'Unauthorized' });
        });
};
