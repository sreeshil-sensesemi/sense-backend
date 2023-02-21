import { hexExtraction } from "../../helpers/hex.data.extraction.js";


export const create = async (request, response) => {
    try {

        const data = request.body.data
        const context = request.body.context;
        console.log(context, "== context");
        console.log(data.length,"== data.length");
        
        const header = data.slice(0, 54);
        //let raw = data.slice(54, 19254);  

        const calData = hexExtraction(header, context);
        console.log(calData);

        if (context == 'ECG') {
            let raw = data.slice(54, 4800);
            await append(raw)
            console.log(calData.patientID);
        }



    } catch (error) {
        console.log(error);
    }
}



async function append(raw) {

    let count = 0;
    let res = [];

    for (var i = 0; i < raw.length; i++) {

        count++;

        if (count == 4) {

            let str = raw[i] + raw[i - 1] + raw[i - 2] + raw[i - 3];

            let decimal = hextodecimal(str);
            res.push(decimal);

            count = 0;

        }

    }

    // console.log(JSON.stringify(res));
    res.forEach(function (element) {
        console.log(element);

    });
}


function hextodecimal(hexString) {

    return parseInt(hexString, 16);
}