import express from 'express'
import * as controller from '../../controllers/ecg12lead/ecg12lead.controller.js'


export const register = async (app) => {


    const router = express.Router();

    router.post('/', controller.create);

   


    app.use('/api/v1/tests', router);

}








