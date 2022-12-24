import * as enterpriseService from '../../services/enterprise/enterprise.service.js'


export const generateEnterpriseID = async () => {
    var SenseHospitalID = Math.floor(Math.random() * 90000) + 10000;
    let SenseHospitalIDStr = SenseHospitalID + ""

    // check if generated ID is unique
    const isIDExist = await enterpriseService.getByEnterpriseID(SenseHospitalIDStr)

    if (isIDExist || SenseHospitalIDStr.length != 5) {
        generateEnterpriseID();
    }

    return SenseHospitalIDStr;
}