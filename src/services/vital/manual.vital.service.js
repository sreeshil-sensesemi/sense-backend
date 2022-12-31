import * as manualVitalRepo from '../../database/sql/sequelize/repositories/vital/manual.vital.repo.js';





export const create = async (manualVitals) => {
    
    const manualData = await manualVitalRepo.create(manualVitals);
    return(manualData);
}


export const getManualVitalsById = async (sensepatientID) => {
    
    const manualVitals = await manualVitalRepo.getManualVitalsById(sensepatientID);
    return manualVitals;
}

export const updateManualVitalByPatientId = async (sensepatientID, data) => {
    
    const manualVitals = await manualVitalRepo.updateManualVitalByPatientId(sensepatientID, data);
    return manualVitals;
}

export const deleteManualVitalByPatientId = async (sensepatientID) => {
    
    const manualVitals = await manualVitalRepo.deleteManualVitalByPatientId(sensepatientID);
    return manualVitals;
}