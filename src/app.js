import express from 'express';

import database from './utils/database.js';
import errors from './utils/error.js';

// Routes
import usersRoutes from './routes/usersRoutes.js';

const app = express();

database(app);

app.use(express.json());

app.use('/users', usersRoutes);

app.use('*', errors);

export default app;