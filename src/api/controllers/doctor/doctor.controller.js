import { registerValidator } from "../../validators/doctor/doctor.validator.js";
import { handleFailure } from "../../../common/response.handler.js";
import { generateDoctorID } from "../../helpers/doctor.helper.js";
import * as doctorService from '../../../services/doctor/doctor.service.js'

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
           return  handleFailure(request, response, 'Input validation erorr', 200, error)
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
        
        response.status(200).json({registered: true, message: "Doctor registered successfully"});

    } catch (error) {
        console.log(error);
        response.status(500).json({registered: false, message: "server error"})
    }
}


// get doctor by doctor id
export const getByDoctorID = async (request, response) => {
    try {

        const doctorID = request.params.doctorID;

        const doctor = await doctorService.getByDoctorID(doctorID);
        response.status(200).send(doctor);
        
    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "server error"})
    }
}


// update doctor by doctor id
export const updateByDoctorID = async (request, response) => {
    try {
        
        
    } catch (error) {
        console.log(error);
        response.status(500).json({message: "server error"});
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