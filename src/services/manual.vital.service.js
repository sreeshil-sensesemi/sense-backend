import * as manualVitalRepo from '../database/sql/sequelize/repositories/manual.vital.repo.js';





export const create = async (manualVitals) => {
    const manualData = await manualVitalRepo.create(manualVitals);
    return(manualData);
}


export const getManualVitalsById = async (sensepatientID) => {
    const manualVitals = await manualVitalRepo.getManualVitalsById(sensepatientID);
    return manualVitals;
}