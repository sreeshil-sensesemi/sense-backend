import express from 'express'
import { create, getManualVitalsById } from '../../controllers/manual.vital.controller.js';


export const register = async (app) => {

    
    const router = express.Router();


    router.post('/', create);
    router.get('/:sensepatientid', getManualVitalsById);
  
   

    app.use('/api/v1/manual-vitals', router);

}



