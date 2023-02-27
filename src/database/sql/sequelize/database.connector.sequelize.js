import { dbConfig, sequelize} from './database.config.js';
import mysql from 'mysql2/promise'
import { Sequelize, DataTypes } from 'sequelize';
import { Enterprise } from './models/enterprise/enterprise.model.js'
import { Doctor } from './models/doctor/doctor.model.js';
import { Patient } from './models/patient/patient.model.js';
import { ManualVital } from './models/manual.vital.model.js';
import { TestReport } from './models/testreport/test.report.model.js';
import { WebUser } from '../../../api/routes/webUser/web.user.model.js';

 var db = {};


//initialize db;
export const initialize = async () => {

    try {

        // create db if it doesn't already exist
        const { HOST: host, PORT: port, USER: user, PASSWORD: password, DB: database } = dbConfig;
        const connection = await mysql.createConnection({ host, port, user, password });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

      

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
        Enterprise.sync();
        Doctor.sync();
        Patient.sync();
        ManualVital.sync();
        TestReport.sync();
        WebUser.sync();


        // sync all models with database
        await sequelize.sync()
            .then(() => {
                console.log('re-sync done');
            })

        console.log('Database Initialized, connected to DB');

    } catch (error) {
        console.log(error);
    }
}


