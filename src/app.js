import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';

import { initialize } from './database/sql/sequelize/database.connector.sequelize.js'
import { routerInit } from './api/routes/router.js'


//app
const app = express();


const setupMiddlewares = async () => {
    return new Promise((resolve, reject) => {

        try {

            //middlewares
            app.use(express.json());
            app.use(express.urlencoded({ extended: true }));
            app.use(cors());
            app.use(helmet());

            console.log("Middlewares Initialized");
            resolve(true)
        } catch (error) {
            console.log(error);
            reject(error)
        }
    })

}


const listen = async () => {
    return new Promise((resolve, reject) => {
        try {
            const port = process.env.PORT || 4000;
            const server = app.listen(port, () => {
                const serviceName = 'SenseService api' + '-' + process.env.NODE_ENV;
                console.log(serviceName + ' is up and listening on port ' + port.toString());

            });
            resolve(true)
        } catch (error) {
            console.log(error);
            reject(error)
        }
    });
}


export const start = async () => {
    try {

        // initialize middlewares
        await setupMiddlewares();

        // initialize database
        //await initialize();

        // initialize router
        await routerInit(app);

        // start server
        await listen();

    } catch (error) {
        console.log(error);
    }

}



export default app;
