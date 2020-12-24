import express from 'express';

import database from './utils/database.js';
import errors from './utils/error.js'

// Routes

const app = express();

database(app);

app.use(express.json());

// app.use('/', )//todo

app.use('*', errors);

export default app;