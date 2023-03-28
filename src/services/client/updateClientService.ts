import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/AppError";
import { IClientUpdate } from "../../interfaces/clients/clientsInterface";

export const updateClientService = async (clientUpdateData:IClientUpdate, id:string, idLogin:string, isAdm:boolean)=>{
    const clientRepository =  AppDataSource.getRepository(Client)


        const clientExists = await clientRepository.findOneBy({
            id
        })
    
        if(!clientExists){
            throw new AppError("client non-exixtent ", 404)
        }

     /*    if(clientUpdateData.isAdm === true || clientUpdateData.isAdm===false){
            throw new AppError("It is not allowed to update the isAdm", 404)
        }
     */
        const updateClient= clientRepository.create(
            {
                ...clientExists,
                ...clientUpdateData,
                isAdm:clientExists.isAdm
            }
        )
    
        await clientRepository.save(updateClient)
    
        return updateClient

    /* }  */   
/* 
    else{
          throw new AppError("not authorized", 401)

    } */


    
    

}