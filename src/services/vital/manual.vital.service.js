import * as manualVitalRepo from '../../database/sql/sequelize/repositories/vital/manual.vital.repo.js';





export const create = async (manualVitals) => {
    
    const manualData = await manualVitalRepo.create(manualVitals);
    return(manualData);
}


export const getManualVitalsById = async (context,patientid) => {
    
    const manualVitals = await manualVitalRepo.getManualVitalsById(context, patientid);
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