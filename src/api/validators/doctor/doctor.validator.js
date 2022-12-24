import Joi from "joi";



export const registerValidator = (data) => {

    const registerSchema = Joi.object({
        sensehospitalID: Joi.string().required().length(5).label("Sense Hospital ID"),
        registrationno: Joi.number().required().label("Registration No"),
        firstname: Joi.string().required().label("First Name"),
        lastname: Joi.string().required().label("Last Name"),
        specialization: Joi.string().required().label("Specialization"),
        statemedicalcouncil: Joi.string().required().label("State Medical Council"),
        //practicingsince: Joi.number().integer().required().min().max().label("Practicing Since"),
        practicingsince: Joi.number().integer().required().label("Practicing Since"),
        age: Joi.number().integer().required().label("Age"),
        gender: Joi.string().required().label("Gender"),
        mobile: Joi.string().required().length(10).label("Mobile Number"),
        city: Joi.string().required().label("City"),
        state: Joi.string().required().label("State")
    });

    return registerSchema.validate(data);
}