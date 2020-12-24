import './env.js';
import chalk from 'chalk';

import app from './src/app.js';

const PORT = 7878;

app.listen(PORT, err => console.log(chalk.blue(`Mon serveur est démarré et écoute sul le port  ${PORT}`)));