import express from 'express'
import * as controller from '../../controllers/vital/device.vital.controller.js'



export const register = (app) => {

    const router = express.Router()

    router.post('/', controller.create);

    // router.post('/bp', createBpRecord)
    // router.post('/bg', createBgRecord);
    // router.post('/spo2', createSpo2Record)
    // router.post('/ecg', createEcgRecord)
    // router.post('/body-temp', createBodyTempRecord)



    app.use('/api/v1/device-vitals', router)

}