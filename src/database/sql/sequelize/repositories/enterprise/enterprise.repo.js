import { Enterprise } from "../../models/enterprise/enterprise.model.js";






//create
export const create = async (registerData) => {
    try {
        const enterprise = await Enterprise.create(registerData);
        return enterprise;
    } catch (error) {
        console.log(error);
    }
}


// get enterprise by mobile number
export const getByMobileNumber = async (MobileNumber) => {
    try {
        const enterprise = await Enterprise.findOne({ where: { MobileNumber: MobileNumber } });
        return enterprise;
        //return await PatientMapper.toDetailsDto(patient);
    } catch (error) {
        console.log(error);
    }
}

// get enterprise by enterprise ID
export const getByEnterpriseID = async (enterpriseID) => {
    try {
        const enterprise = await Enterprise.findOne({ where: { SenseHospitalID: enterpriseID } });
        return enterprise;
        //return await PatientMapper.toDetailsDto(patient);
    } catch (error) {
        console.log(error);
    }
}

// update enterprise by enterprise ID 
export const updateByEnterpriseID = async (enterpriseID, data) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}

// delete enterprise by enterprise ID
export const deleteByEnterpriseID = async (enterpriseID) => {
    try {
        
        await Enterprise.destroy({ where: { SenseHospitalID: enterpriseID }})
        
    } catch (error) {
        console.log(error);
    }
}