// ! Don't convert require into import
require('module-alias/register');
const moduleAlias = require('module-alias');
moduleAlias.addAlias('@', __dirname);

import { createApp } from './app';
import { connectDatabase } from './database/connector';
import { registerWorker, startServer, initializeFirebase } from './server';

if (process.env.NODE_ENV !== 'test') {
    const app = createApp();
    startServer(app);
    connectDatabase()
        .then(() => console.log('🗄️  Database Connected!'))
        .catch((err) => '❌  Database Not Connected!');
    registerWorker();
    initializeFirebase();
}
