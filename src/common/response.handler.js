





export const handleFailure = (request, response, message, httpErrorCode, error) => {


    const ips = [
        request.header('x-forwarded-for') || request.socket.remoteAddress
    ];
    const msg = error ? error.message : (message ? message : 'An error has occurred.');
    const errorCode = httpErrorCode ? httpErrorCode : 500

    const responseObject = {
        Status: 'failure',
        Message: msg,
        Httpcode: errorCode,
        Context: request ? request.context : null,
        Request: {
            Method: request ? request.method : null,
            Host: request ? request.hostname : null,
            Body: request ? request.body : null,
            Headers: request ? request.headers : null,
            Url: request ? request.originalUrl : null,
            Params: request ? request.params : null,
        },
        ClientIps: request && request.ips.length > 0 ? request.ips : ips,
        APIVersion: process.env.API_VERSION,
    }

    return response.status(errorCode).send(responseObject);

}



export const handleSuccess = (request, response, message, httpCode, data, logDataObject = true) => {


    const ips = [
        request.header('x-forwarded-for') || request.socket.remoteAddress
    ];

    const responseObject = {
        Status: 'success',
        Message: message,
        HttpCode: httpCode ?? 200,
        Data: data ?? null,
        Context: request ? request.context : null,
        Request: {
            Method: request ? request.method : null,
            Host: request ? request.hostname : null,
            Body: request ? request.body : null,
            Headers: request ? request.headers : null,
            Url: request ? request.originalUrl : null,
            Params: request ? request.params : null,
        },
        ClientIps: request && request.ips.length > 0 ? request.ips : ips,
        APIVersion: process.env.API_VERSION,
    };

    return response.status(httpCode).send(responseObject);

}




export const handleError = (request, response, error) => {

    // if (error instanceof InputValidationError) {
    //     const validationError = error as InputValidationError;
    //     ResponseHandler.failure(request, response, validationError.message, validationError.httpErrorCode, error);
    // }
    // else if (error instanceof ApiError) {
    //     var err = error as ApiError;
    //     ResponseHandler.failure(request, response, err.errorMessage, err.httpErrorCode, error);
    // }
    // else {
    //     ResponseHandler.failure(request, response, error.message, 400, error);
    // }

}