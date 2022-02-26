import { createWorker } from 'celery-node';
import * as express from 'express';
import { createServer, Server } from 'http';

import CONFIG from '@/config';

export const startServer = (app: express.Application): Server => {
    const httpServer = createServer(app);

    return httpServer.listen({ port: CONFIG.APP.PORT }, (): void => {
        process.stdout.write(
            `⚙️  Application Environment: ${CONFIG.APP.ENV}\n`,
        );
        process.stdout.write('📚 Debug logs are ENABLED\n');
        process.stdout.write(
            `🚀 ${CONFIG.APP.NAME.toUpperCase()} Server is ready at http://${
                CONFIG.APP.HOST
            }:${CONFIG.APP.PORT}\n`,
        );
    });
};

export const registerWorker = (): void => {
    const celeryWorker = createWorker(
        CONFIG.CELERY_BROKER,
        CONFIG.CELERY_BACKEND,
    );

    celeryWorker.start();
};
