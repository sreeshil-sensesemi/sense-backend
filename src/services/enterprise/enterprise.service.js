

import * as enterpriseRepo from '../../database/sql/sequelize/repositories/enterprise/enterprise.repo.js'




//create 
export const create = async (registerData) => {
    
    const enterprise = await enterpriseRepo.create(registerData);
    return enterprise;
}



//get enterprise by mobile number
export const getByMobileNumber = async (mobileNumber) => {
    
    const enterprise = await enterpriseRepo.getByMobileNumber(mobileNumber);
    return enterprise;
}

// get enterprise by enterpriseID
export const getByEnterpriseID = async (enterpriseID) => {

    const enterprise = await enterpriseRepo.getByEnterpriseID(enterpriseID);
    return enterprise;
}
