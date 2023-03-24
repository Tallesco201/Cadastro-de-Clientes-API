import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/AppError";
import { IClientUpdate } from "../../interfaces/clients/clientsInterface";

export const updateClientService = async (clientUpdateData:IClientUpdate, id:string, idLogin:string, isAdm:boolean)=>{
    const clientRepository =  AppDataSource.getRepository(Client)


/*     const client  = id === idLogin || isAdm === true ? "ok": "deu certo "
 */

    /* if(id === idLogin || isAdm === true){ */
        const clientExists = await clientRepository.findOneBy({
            id
        })
    
        if(!clientExists){
            throw new AppError("client non-exixtent ", 404)
        }
    
        const updateClient= clientRepository.create(
            {
                ...clientExists,
                ...clientUpdateData
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