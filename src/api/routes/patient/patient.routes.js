import express from 'express'
import * as controller from '../../controllers/patient/patient.controller.js';


export const register = async (app) => {

    
    const router = express.Router();


    router.post('/', controller.create);

    router.get('/search', controller.searchPatient);
    
   // router.get('/test', async (req, res) => res.send("success Patient api get"))
   

    app.use('/api/v1/patients', router);

}



