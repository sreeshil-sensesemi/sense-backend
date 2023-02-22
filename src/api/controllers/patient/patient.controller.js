import * as patientService from '../../../services/patient/patient.service.js'
import * as doctorService from '../../../services/doctor/doctor.service.js'
import { registerValidator } from '../../validators/patient/patient.validator.js';
import { handleFailure } from '../../../common/response.handler.js';
import { generatePatientID } from '../../helpers/patient.helper.js';
import { loginValidator, verifyOtpValidator } from '../../validators/enterprise/enterprise.validator.js';
import { sendOtp, verifyOtp } from '../../helpers/otp.config.js';



//create patient
export const create = async (request, response) => {
    try {

        const validator = registerValidator(request.body);
        //return if error occured
        if (validator.error) {
            const error = {
                verify: false,
                message: validator.error.details[0].message.replace(/"/g, "")
            }
            return handleFailure(request, response, 'Input validation erorr', 200, error)
        }

        //generate patient ID 
        const patientID = await generatePatientID(request.body.sensehospitalID, request.body.sensedoctorID)

        const patientData = {
            SensePatientID: patientID,
            SenseDoctorID: request.body.sensedoctorID,
            SenseHospitalID: request.body.sensehospitalID,
            Name: request.body.name,
            Age: request.body.age,
            Gender: request.body.gender,
            MobileNumber: request.body.mobile,
            City: request.body.city,
            Height: request.body.height,
            Weight: request.body.weight,
            Smoking: request.body.smoking,
            Alcohol: request.body.alcohol,
            Diabetes: request.body.diabetes,
            ChronicKidneyDisease: request.body.chronickidneydisease,
            Epilepsy: request.body.epilepsy,
            Cardiac: request.body.cardiac,
            Cancer: request.body.cancer,
        }

        const patient = await patientService.create(patientData);
        response.status(200).json({ registered: true, message: "patient is registered successfully" })


    } catch (error) {
        console.log(error);
        response.status(500).json({ registered: false, message: "server error" });
    }
}



// search patient
export const searchPatient = async (request, response) => {
    try {

        const searchQuery = request.query.mobile;

        const patient = await patientService.searchPatient(searchQuery);

        if (!patient) return response.status(200).json({ error: true, data: '' })

        response.status(200).json({ error: false, data: patient })

    } catch (error) {
        console.log(error);
        response.status(500).json({ error: true, message: "server error" });
    }
}



// patient login in patient app
export const patientLoginWithMobileNumber = async (request, response) => {
    try {
        
        const validator = loginValidator(request.body);
    
        //return if error occured
        if (validator.error) {
            const error = {
                otpsent: false,
                message: validator.error.details[0].message.replace(/"/g, "")
            }
            return handleFailure(request, response, 'Input validation erorr', 200, error)
        }

        const { mobilenumber: MobileNumber } = request.body;

        //twilio otp  send
        const sendOtpRes = await sendOtp(MobileNumber);

        response.status(200).json({ otpsent: true, error: false, message: "OTP sent successfully, enter The OTP to continue" })


    } catch (error) {
        console.log(error);
        response.status(500).json({ error: true, message: "server error" });
    }
}


// otp verify
export const otpVerify = async (request, response) => {
    try {
       

        const validator = verifyOtpValidator(request.body);

        //return if error occured
        if (validator.error) {
            const error = {
                verify: false,
                message: validator.error.details[0].message.replace(/"/g, "")
            }
            return handleFailure(request, response, 'Input validation erorr', 400, error)
        }

        const { otp, mobilenumber } = request.body;
        

        // twilio otp verify
        const verifyOtpRes = await verifyOtp(otp, mobilenumber)

        //return if not verified
        if (!verifyOtpRes) return response.status(200).json({ verified: false, error: true, message: "OTP verification failed" })

        //otp verify success
        if (verifyOtpRes.status == 'approved' && verifyOtpRes.valid == true) {


            const patient = await patientService.getByMobileNumber(mobilenumber);
            console.log(patient);

            if (patient) return response.status(200).json({ verified: true, isExist: true, error: false, data: patient, message: "OTP verification success, Logged In" })


            response.status(200).json({ verified: true, isExist: false, error: false, message: "OTP verification success , Patient is not registerd" })

        } else {
            // return if otp verify failed (wrong otp)
            response.status(200).json({ verified: false, error: true, message: "OTP verification failed " })
        }

    } catch (error) {
        console.log(error);
        response.status(500).json({ verified: false, error: true, message: "server error" })
    }
}


//get patient doctor 
export const getPatientDoctor = async (request, response) => {
    try {

        const patientid = request.params.id;

        const hospitalid = patientid.slice(0,5);
        const doctorid = patientid.slice(5,8);
       

        const doctor = await doctorService.getDoctor(doctorid, hospitalid);

        if (!doctor) return response.status(200).json({message: 'doctor not found'})

        response.status(200).json({data: doctor})

        
    } catch (error) {
        console.log(error);
        response.status(500).json({message: "server error" })
    }
}



//get all doctors
export const getAllDoctors = async (request, response) => {
    try {

        const patientid = request.params.id;

        const hospitalID = patientid.slice(0,5);

        const doctors = await doctorService.getAllDoctorsByEnterpriseID(hospitalID);

        if (doctors.length == 0) return response.status(200).json({message: 'doctors not found'})

        //response.status(200).json({data: doctors});
        response.status(200).send(doctors);

        
    } catch (error) {
        console.log(error);
        response.status(500).json({  message: "server error" })
    }
}