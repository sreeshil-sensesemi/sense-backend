import dbConfig from './database.config.js';
import mysql from 'mysql2/promise'
import { Sequelize, DataTypes } from 'sequelize';

import { enterprise } from './models/enterprise/enterprise.model.js'
import { doctor } from './models/doctor/doctor.model.js';
import { patient } from './models/patient/patient.model.js';

export const db = {};


//initialize();
export const initialize = async () => {

    try {

        // create db if it doesn't already exist
        const { HOST: host, PORT: port, USER: user, PASSWORD: password, DB: database } = dbConfig;

        const connection = await mysql.createConnection({ host, port, user, password });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);



        // connect to db
        const sequelize = new Sequelize(
            dbConfig.DB,
            dbConfig.USER,
            dbConfig.PASSWORD, {
            host: dbConfig.HOST,
            dialect: dbConfig.dialect,
            operatorsAliases: false,


            pool: {
                max: dbConfig.pool.max,
                min: dbConfig.pool.min,
                acquire: dbConfig.pool.acquire,
                idle: dbConfig.pool.idle
            }
        }
        )

        //authenticate db
        await sequelize.authenticate()
            .then(() => {
                console.log('connected');
            })
            .catch(err => {
                console.log('Error' + err);
            })



        db.Sequelize = Sequelize;
        db.sequelize = sequelize;

        // init models and add them to the exported db object
        db.hospitals = enterprise(sequelize, DataTypes)
        db.doctors = doctor(sequelize, DataTypes)
        db.patients = patient(sequelize, DataTypes)


        // sync all models with database
        // await sequelize.sync().then(() => { console.log("re-sync done") });
        await db.sequelize.sync({ alter: true })
            .then(() => {
                console.log('re-sync done');
            })

        console.log('connected to database');

    } catch (error) {
        console.log(error);
    }
}

