import { Request, Response, NextFunction } from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'

export const verifyAutheticationOfToken = async(req: Request, res: Response, next: NextFunction) => {

    let token = req.headers.authorization

    if(!token){
        return res.status(401).json({
            message: 'Invalid token'
        })
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
        if(error){
            return res.status(401).json({
                message: error.message
            })
        }
        
        req.client = {
            id: decoded.id,
            isAdm: decoded.isAdm,
        }

        return next()
    })

}
