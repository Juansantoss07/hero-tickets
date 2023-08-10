// Nesse arquivo estamos herdando a classe Error e incluindo as propriedades 'status' e 'message' 

class HttpException extends Error {

    public status: Number;
    public message: string;

    constructor(status:Number, message:string){
        super(message);

        this.status = status;
        this.message = message;
    }
}

export { HttpException };