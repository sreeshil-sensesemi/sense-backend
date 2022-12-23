import express from 'express'
import { create, loginWithMobile, otpVerify } from '../../controllers/enterprise/enterprise.controller.js';




export const register = async (app) => {


    const router = express.Router();


    router.post('/', create);
    router.post('/login', loginWithMobile);
    router.post('/verify-otp', otpVerify);



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