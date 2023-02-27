import * as doctorService from '../../../services/doctor/doctor.service.js'
import { registerValidator } from "../../validators/doctor/doctor.validator.js";
import { handleFailure } from "../../../common/response.handler.js";
import { generateDoctorID } from "../../helpers/doctor.helper.js";
import { loginValidator, verifyOtpValidator } from "../../validators/doctor/doctor.validator.js";
import { sendOtp, verifyOtp } from "../../helpers/otp.config.js";



//////////////////////////////////////////////////////






//register doctor
export const create = async (request, response) => {
    try {
        console.log(request.body);
        const validator = registerValidator(request.body);

        //return if error occured
        if (validator.error) {
            const error = {
                verify: false,
                message: validator.error.details[0].message.replace(/"/g, "")
            }
            return handleFailure(request, response, 'Input validation erorr', 200, error)
        }

        // const isMobileExist = await


        //generate doctor ID
        const doctorID = await generateDoctorID(request.body.sensehospitalID);

        const doctorData = {
            SenseDoctorID: doctorID,
            SenseHospitalID: request.body.sensehospitalID,
            RegistrationNo: request.body.registrationno,
            Name: request.body.name,
            Specialization: request.body.specialization,
            //StateMedicalCouncil: request.body.statemedicalcouncil,
            PractisingSince: request.body.practisingsince,
            Age: request.body.age,
            Gender: request.body.gender,
            MobileNumber: request.body.mobile,
            City: request.body.city,
            // State: request.body.state,
        }


        const doctor = await doctorService.create(doctorData);

        response.status(200).json({ registered: true, message: "Doctor registered successfully" });

    } catch (error) {
        console.log(error);
        response.status(500).json({ registered: false, message: "server error" })
    }
}


//doctor login with mobilenumber
export const loginWithMobileNumber = async (request, response) => {
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

//verify otp
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


            const doctor = await doctorService.getByMobileNumber(mobilenumber);
            
            if (!doctor) return  response.status(200).json({ verified: true, isExist: false, error: false, message: "OTP verification success , doctor is not registerd" })

            response.status(200).json({ verified: true, error: false, data: doctor, message: "OTP verification success, Logged In" })

        } else {
            // return if otp verify failed (wrong otp)
            response.status(200).json({ verified: false, error: true, message: "OTP verification failed " })
        }


    } catch (error) {
        console.log(error);
    }
}

// get all doctors with enterpriseID
export const getAllDoctorsByEnterpriseID = async (request, response) => {
    try {

        const enterpriseID = request.params.id;

        const doctors = await doctorService.getAllDoctorsByEnterpriseID(enterpriseID);
        response.status(200).send(doctors);

    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "server error" })
    }
}
// get doctor by doctor id
export const getByDoctorID = async (request, response) => {
    try {

        const doctorID = request.params.id;

        const doctor = await doctorService.getDoctor(doctorID);
        response.status(200).send(doctor);

    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "server error" })
    }
}


// update doctor by doctor id
export const updateByDoctorID = async (request, response) => {
    try {


    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "server error" });
    }
}



//search doctor
export const searchDoctor = async (request, response) => {
    try {
        const searchQuery = request.body.search;

        const doctor = await doctorService.searchDoctor(searchQuery);
        response.status(200).json({ data: doctor });

    } catch (error) {
        console.log(error);
        response.status(500).send("server error")
    }
}


//delete doctor by doctor id
export const deleteByDoctorID = async (request, response) => {
    try {

        const doctorID = request.params.doctorID;

        const res = await doctorService.deleteByDoctorID(doctorID);
        response.status(200).send(res)

    } catch (error) {
        console.log(error);
        response.status(500).send("server error")
    }
}

