

class CustomAPIError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

const createCustomError = (msg,status) =>{
    return new CustomAPIError(msg,status);
}

module.exports = {
    CustomAPIError,
    createCustomError,
}