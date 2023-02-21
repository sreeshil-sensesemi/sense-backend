import express from 'express'
import * as controller from '../../controllers/vital/manual.vital.controller.js';


export const register = async (app) => {

    
    const router = express.Router();


    router.post('/', controller.create);
    router.get('/:id',  controller.getManualVitalsByPatientId);
    router.put('/:id', controller.updateManualVitalByPatientId);
    router.delete('/:id', controller.deleteManualVitalByPatientId);
   

    app.use('/api/v1/manual-vitals', router);

}



