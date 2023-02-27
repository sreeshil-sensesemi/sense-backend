import express from 'express'
import * as controller from '../../controllers/patient/patient.controller.js';
import { upload } from '../../helpers/multer.config.js';

export const register = async (app) => {

    
    const router = express.Router();


    router.post('/', controller.create);

    router.get('/search', controller.searchPatient);
    
    
    //patient app
    router.post('/login', controller.patientLoginWithMobileNumber);
    router.post('/verify-otp', controller.otpVerify);

    
    // get doctors in patientapp
    router.get('/doctor/:id', controller.getPatientDoctor);
    router.get('/all-doctors/:id', controller.getAllDoctors); 



    

    app.use('/api/v1/patients', router);

}



