// ! Don't convert require into import
require('module-alias/register');
const moduleAlias = require('module-alias');
moduleAlias.addAlias('@', __dirname);

import { createApp } from './app';
import { connectDatabase } from './database/connector';
import { registerWorker, startServer } from './server';

if (process.env.NODE_ENV !== 'test') {
    const app = createApp();
    startServer(app);
    connectDatabase();
    registerWorker();
}
