import express from 'express'
import * as controller from '../../controllers/testreport/test.report.controller.js';
import { upload } from '../../helpers/multer.config.js';

export const register = async (app) => {

    
    const router = express.Router();


    router.post('/', upload.single('report'), controller.create); //uploading patients test - report 
    router.get('/',  controller.getTestReport); //get test-report
    



    app.use('/api/v1/test-report', router);

}



