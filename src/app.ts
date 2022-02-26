import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import * as errorHandler from '@/middlewares/errorHandler';
import { authenticate } from '@/middlewares/cognitoAuth';
import routes from '@/routes';
import api from '@/routes/api';

export const createApp = (): express.Application => {
    const app = express();

    app.use(
        cors({
            credentials: true,
            origin: (origin, callback) => {
                return callback(null, true);
            },
        }),
    );
    app.use(helmet());
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(
        express.urlencoded({
            extended: true,
        }),
    );

    // API Routes
    app.use('/', routes);
    app.use('/api', api);

    // Error Middleware
    app.use(errorHandler.genericErrorHandler);
    app.use(errorHandler.notFoundError);

    return app;
};
