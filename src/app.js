import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';

import { initialize } from './database/sql/sequelize/database.connector.sequelize.js'
import { routerInit } from './api/routes/router.js'



//app
const app = express();
var db;


/////////////////////////////////////////////////
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
        await initialize();

        // initialize router
        await routerInit(app);

        // start server
        await listen();

    } catch (error) {
        console.log(error);
    }

}






export default app;
////////////////////////////////////////////////////////////
































// export const start = async () => {
//     try {

//         configMiddlewares()

//         configRoutes()

//         //start server
//         await listen();

//     } catch (error) {
//         console.log(error);
//     }

// }


// function configMiddlewares() {
//     app.use(express.json({ limit: '30mb', extended: true }));
//     app.use(express.urlencoded({ limit: '30mb', extended: true }));
//     app.use(cors());
//     app.use(helmet());
// }

// function configRoutes() {
//     app.get('/', (req, res) => res.send('API IS WORKING'));
//     app.use('/api/v1', Routes);

//     app.all('*', (req, res) => {
//     res.status(404).json({
//         status: false,
//         message: `Can't find ${req.originalUrl} on this server!`,
//     });
// });
// }

// // app.all('*', (req, res) => {
// //     res.status(404).json({
// //         status: false,
// //         message: `Can't find ${req.originalUrl} on this server!`,
// //     });
// // });


// export default app;