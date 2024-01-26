class BaseError extends Error {
    status;
    constructor(param){
        super(param?.message);
        this.status = param?.status || 500;
    }
    get getStatus(){
        return this.status;
    }
}

module.exports = BaseError;
