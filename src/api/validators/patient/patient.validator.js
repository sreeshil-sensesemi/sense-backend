import Joi from "joi";


export const registerValidator = (data) => {

    const registerSchema = Joi.object({
        sensedoctorID: Joi.string().required().length(3).label("Doctor ID"),
        sensehospitalID: Joi.string().required().length(5).label("Hospital ID"),
        firstname: Joi.string().required().label("First Name"),
        lastname: Joi.string().required().label("Last Name"),
        age: Joi.number().required().label("Age"),
        mobile: Joi.string().required().length(10).label("Mobile Number"),
        city: Joi.string().required().label("City"),
        state: Joi.string().required().label("State"),
        SBP: Joi.number().required().label("SBP"),
        DBP: Joi.number().required().label("DBP"),
        height: Joi.number().required().label("Height"),
        weight: Joi.number().required().label("Weight"),
        gender: Joi.string().required().label("Gender"),
    })

    return registerSchema.validate(data);
}