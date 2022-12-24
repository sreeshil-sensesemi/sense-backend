import { registerValidator } from "../../validators/doctor/doctor.validator.js";
import { handleFailure } from "../../../common/response.handler.js";
import { generateDoctorID } from "../../helpers/doctor.helper.js";
import * as doctorService from '../../../services/doctor/doctor.service.js'

//register doctor
export const create = async (request, response) => {
    try {
        const validator = registerValidator(request.body);
         //return if error occured
         if (validator.error) {
            const error = {
                verify: false,
                message: validator.error.details[0].message.replace(/"/g, "")
            }
            handleFailure(request, response, 'Input validation erorr', 400, error)
        }


        //generate doctor ID
        const doctorID = await generateDoctorID(request.body.sensehospitalID);

        const doctorData = {
            SenseDoctorID: doctorID,
            SenseHospitalID: request.body.sensehospitalID,
            RegistrationNo: request.body.registrationno,
            FirstName: request.body.firstname,
            LastName: request.body.lastname,
            Specialization: request.body.specialization,
            StateMedicalCouncil: request.body.statemedicalcouncil,
            PractisingSince: request.body.practicingsince,
            Age: request.body.age,
            Gender: request.body.gender,
            MobileNumber: request.body.mobile,
            City: request.body.city,
            State: request.body.state,
        }

        const doctor = await doctorService.create(doctorData);
        response.send(doctor);

    } catch (error) {
        console.log(error);
    }
}