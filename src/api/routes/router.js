import express from 'express';
import { register as registerEnterpriseRoutes } from './enterprise/enterprise.routes.js'
import { register as registerDoctorRoutes } from './doctor/doctor.routes.js';
import { register as registerPatientRoutes } from './patient/patient.routes.js';
import { register as registerManualVitalRoutes } from './vital/manual.vital.routes.js';
import { register as registerDeviceVitalRoutes } from './vital/device.vital.routes.js'
import { register as registerWebUserRoutes } from './webUser/web.user.routes.js'
import { register as registerECGRoutes } from './ecg12lead/ecg12lead.router.js'
import { register as registerTestReportRoutes } from './testreport/test.report.router.js'

export const routerInit = async (app) => {
    return new Promise((resolve, reject) => {

        try {

            //Handling the base route
            app.get('/api/v1/', (req, res) => {
                res.send({
                    message: `SenseService-RPC API [Version ${process.env.API_VERSION}]`,
                });
            });

            //Initializing the routes
            registerEnterpriseRoutes(app);
            registerDoctorRoutes(app);
            registerPatientRoutes(app);
            registerManualVitalRoutes(app);
            registerDeviceVitalRoutes(app);
            registerWebUserRoutes(app);
            registerECGRoutes(app);
            registerTestReportRoutes(app);

            //Handling the wrong route
            app.all('*', (req, res) => {
                res.status(404).json({
                    status: false,
                    message: `Can't find ${req.originalUrl} on this server!`,
                });
            });

            console.log("Routes Initialized");
            resolve(true)

        } catch (error) {
            console.log(error);
            reject(error)
        }
    });

}


