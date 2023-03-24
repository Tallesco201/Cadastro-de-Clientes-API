import { Request, Response, NextFunction } from 'express'
import { AppError } from '../errors/AppError'


export const userAndAdmMiddleware = (req: Request, res: Response, next: NextFunction) => {
    
    console.log("AQUI =====", req.client.isAdm)
    console.log("=====",req.client.id)

    if (req.client.isAdm === true){
        next()
    }

    else{
        throw new AppError("the user is not an administrator", 403)
       }
    
    }
