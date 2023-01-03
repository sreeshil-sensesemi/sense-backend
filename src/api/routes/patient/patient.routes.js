import express from 'express'
import { create } from '../../controllers/patient/patient.controller.js';


export const register = async (app) => {

    
    const router = express.Router();


    router.post('/', create);
    
   // router.get('/test', async (req, res) => res.send("success Patient api get"))
   

    app.use('/api/v1/patients', router);

}



