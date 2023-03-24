import AppDataSource from "../../data-source"
import { Client } from "../../entities/client.entity"
import { AppError } from "../../errors/AppError"

export const deleteClienteService = async (id:string, idLogin:string, isAdm:boolean) => {
    const clientRepository =  AppDataSource.getRepository(Client)

    /* if(id === idLogin || isAdm === true){ */

        const clientExists = await clientRepository.findOneBy({
            id
        })
    
        if(!clientExists){
            throw new AppError(' Client non-existent', 404)
        }
    
        await clientRepository.delete(id)

/*     } */


    
}