import { AppError } from "../errors/AppError"
import { Request, Response, NextFunction } from 'express'



export const custumerAndAdmAndProfileUser= (req: Request, res: Response, next: NextFunction) => {
    

    if (req.client.isAdm === true || req.client.id === req.params.id){
        next()
    }

    else{
        throw new AppError("not authorized", 401)
    }
    
    }
