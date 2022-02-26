import express from 'express';
const CognitoExpress = require('cognito-express');
import CONFIG from '../config';

const authenticatedRoute = express.Router();

//Our middleware that authenticates all APIs under our 'authenticatedRoute' Router
export const authenticate = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    let cognitoParams = {
        region: CONFIG.AWS.REGION,
        cognitoUserPoolId: CONFIG.AWS.COGNITO.USER_POOL_ID.DEV,
        tokenUse: 'id', //Possible Values: access | id
        tokenExpiration: 3600000, //Up to default expiration of 1 hour (3600000 ms)
    };
    // console.log('req --> ', req);

    //I'm passing in the access token in header under key accessToken
    let accessTokenFromClient = req.headers.authorization?.split(' ')[1];

    //Fail if token not present in header.
    if (!accessTokenFromClient)
        return res.status(401).send('Access Token missing from header');

    if (req.body['prod']) {
        cognitoParams.cognitoUserPoolId = CONFIG.AWS.COGNITO.USER_POOL_ID.PROD;
    }
    // console.log(req.body);
    //Initializing CognitoExpress constructor
    const cognitoExpress = new CognitoExpress(cognitoParams);
    cognitoExpress.validate(
        accessTokenFromClient,
        function (err: express.ErrorRequestHandler, response: any) {
            //If API is not authenticated, Return 401 with error message.
            if (err) return res.status(401).send(err);

            //Else API has been authenticated. Proceed.
            req.body['customer_id'] = response.sub;
            next();
        },
    );
};
