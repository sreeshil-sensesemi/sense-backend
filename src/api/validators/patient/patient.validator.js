import Joi from "joi";


export const registerValidator = (data) => {

    const registerSchema = Joi.object({
        sensedoctorID: Joi.string().required().length(3).label("Doctor ID"),
        sensehospitalID: Joi.string().required().length(5).label("Hospital ID"),
        firstname: Joi.string().required().label("First Name"),
        lastname: Joi.string().required().label("Last Name"),
        age: Joi.string().required().label("Age"),
        mobile: Joi.string().required().length(10).label("Mobile Number"),
        city: Joi.string().required().label("City"),
        state: Joi.string().required().label("State"),
        height: Joi.string().required().label("Height"),
        weight: Joi.string().required().label("Weight"),
        gender: Joi.string().required().label("Gender"),
        smoking: Joi.string().required().label("Smoking"),
        alcohol: Joi.string().required().label("Alcohol"),
        diabetes: Joi.string().required().label("Diabetes"),
        chronickidneydisease: Joi.string().required().label("Chronic Kidney Disease"),
        epilepsy: Joi.string().required().label("Epilepsy"),
        cardiac: Joi.string().required().label("Cardiac"),
        cancer: Joi.string().required().label("Cancer"),
    })

    return registerSchema.validate(data);
}