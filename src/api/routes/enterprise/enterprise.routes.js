import express from 'express'
import * as controller from '../../controllers/enterprise/enterprise.controller.js'
import { upload } from '../../helpers/multer.config.js';


export const register = async (app) => {


    const router = express.Router();


    router.post('/', upload.single('logo'), controller.create);
    router.post('/login', controller.loginWithMobile);
    router.post('/verify-otp', controller.otpVerify);

    router.get('/resend-otp', controller.resendOtp);
    router.get('/:enterpriseID', controller.getByEnterpriseID);
    router.put('/:enterpriseID', controller.updateByEnterpriseID);
    router.delete('/:enterpriseID', controller.deleteByEnterpriseID);

    router.get('/doctors/:enterpriseID', controller.getDoctors);
    router.get('/patients/:enterpriseID', controller.getPatients);


    router.get('/test', async (req, res) => res.send("success api get"))


    app.use('/api/v1/enterprises', router);

}










// router.post('/', create);
// router.post('/login', loginWithMobileNumber);
// router.post('/verify-otp', verifyOtp);
// router.get('/resend-otp', resendOtp);

// // get enterprise profile
// router.get('/:enterpriseId', getById);

// // update
// router.put('/:enterpriseId', updateById);

// // delete
// router.delete('/:enterpriseId', deleteById);


// export default router;