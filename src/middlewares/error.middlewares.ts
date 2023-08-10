// Nesse arquivo estamos tratando os possíveis erros ao realizar a troca de informações pela url

import { NextFunction, Request, Response } from "express";
import { HttpException } from "../interfaces/HttpsExceptions";

export function errorMiddleware(err: HttpException, req: Request, res: Response, next: NextFunction){

    const status: number = err.status  ?? 500;
    const message: string = err.message ?? 'Internal Server error';

    res.status(status).json({
        status, 
        message
    });
}