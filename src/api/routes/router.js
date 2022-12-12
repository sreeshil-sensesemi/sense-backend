import express from 'express';

//import routes
import enterpriseRoutes from './enterprise/enterprise.routes.js' 
import doctorRoutes from './doctor/doctor.routes.js'
import patientRoutes from './patient/patient.routes.js'

const router = express.Router();

//routes middlewares
router.use('/hospitals', enterpriseRoutes);
router.use('/doctors', doctorRoutes);
router.use('/patients', patientRoutes);





export default router