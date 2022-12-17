import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';
import Router from './api/routes/router.js'

import {initialize} from './database/sql/sequelize/database.connector.sequelize.js'

//app
const app = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(helmet());

// initialize database
 initialize();


app.get('/', (req, res) => res.send('API IS WORKING'));
app.use('/api/v1', Router);


//return for non-existing api
app.all('*', (req, res) => {
    res.status(404).json({
        status: false,
        message: `Can't find ${req.originalUrl} on this server!`,
    });
});

export default app;