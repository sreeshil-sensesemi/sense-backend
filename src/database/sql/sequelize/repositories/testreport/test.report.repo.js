import { TestReport } from "../../models/testreport/test.report.model.js";






//create test report
export const create = async () => {
    try {
        const report = await TestReport.create();
        return report;
    } catch (error) {
        console.log(error);
        return
    }
}


//get  test report
export const getTestReport = async () => {
    try {
        
        
    } catch (error) {
        console.log(error);
    }
}