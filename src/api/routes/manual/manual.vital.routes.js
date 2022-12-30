import express from 'express'
import * as controller from '../../controllers/manual.vital.controller.js';


export const register = async (app) => {

    
    const router = express.Router();


    router.post('/', controller.create);
    router.get('/:sensepatientid',  controller.getManualVitalsByPatientId);
    router.put('/:sensepatientid', controller.updateManualVitalByPatientId);
    router.delete('/:sensepatientid', controller.deleteManualVitalByPatientId);
   

    app.use('/api/v1/manual-vitals', router);

}



