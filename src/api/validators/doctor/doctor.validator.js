import Joi from "joi";



export const registerValidator = (data) => {

    const registerSchema = Joi.object({
        sensehospitalID: Joi.string().required().length(5).label("Sense Hospital ID"),
        registrationno: Joi.string().required().label("Registration No"),
        name: Joi.string().required().label("Name"),
        specialization: Joi.string().required().label("Specialization"),
        //statemedicalcouncil: Joi.string().required().label("State Medical Council"),
        //practicingsince: Joi.number().integer().required().min().max().label("Practicing Since"),
        practisingsince: Joi.string().required().label("Practising Since"),
        age: Joi.string().required().label("Age"),
        gender: Joi.string().required().label("Gender"),
        mobile: Joi.string().required().length(10).label("Mobile Number"),
        city: Joi.string().required().label("City"),
        //state: Joi.string().required().label("State")
    });

    return registerSchema.validate(data);
}


export const loginValidator = (data) => {

    const loginSchema = Joi.object({
        mobilenumber: Joi.string().required().length(10).label("Mobile Number")
    });

    return loginSchema.validate(data);
}

export const verifyOtpValidator = (data) => {

    const otpSchema = Joi.object({
        otp: Joi.string().required().length(4).label("OTP"),
        mobilenumber: Joi.string().required().length(10).label("Mobile Number"),
    });

    return otpSchema.validate(data);
}
