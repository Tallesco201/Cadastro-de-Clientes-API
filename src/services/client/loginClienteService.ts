import { compare } from "bcryptjs";
import jwt from 'jsonwebtoken'
import 'dotenv/config'


import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/AppError";
import { IClientLogin } from "../../interfaces/clients/clientsInterface";

export const loginClientService = async  (data:IClientLogin)=>{
    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOneBy({
        email:data.email
    })

    

    const passwordMacth = await compare(data.password,  client.password)

    if(!client){
        throw new AppError("Email or password invalid", 403)
    }

    if(!passwordMacth){
        throw new AppError("Email or password invalid", 403)
    }

    const token = jwt.sign(
        {
            isAdm:client.isAdm,
            id:client.id
        },
        process.env.SECRET_KEY,
        {
            
            subject: String(client.id), 
            expiresIn:'24h'
        }
        
    )

    return {token}

}