import express from 'express'
import * as controller from '../../controllers/doctor/doctor.controller.js';





export const register = async (app) => {


    const router = express.Router();


    router.post('/', controller.create);
    router.post('/login', controller.loginWithMobileNumber);
    router.post('/verify-otp', controller.otpVerify);

    router.get('/:id', controller.getAllDoctorsByEnterpriseID);
    //router.get('/:id', controller.getByDoctorID);
    //router.put('/:id', controller.updateByDoctorID);
    //router.delete('/:doctorID', controller.deleteByDoctorID);

    // router.post('/search', controller.searchDoctor);


    router.get('/test', async (req, res) => res.send("success Doctors api get"))


    app.use('/api/v1/doctors', router);

}













// //create
// router.post('/', create);

// //update
// router.put(':doctorId', updateById);

// //get doctor by doctor id
// router.get('/:doctorId', getById);

// //delete
// router.delete('/:doctorId', deleteById)

