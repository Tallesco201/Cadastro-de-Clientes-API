import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/AppError";
import { IClient, IClientRequest } from "../../interfaces/clients/clientsInterface";

export const createdClientService = async (clientData:IClientRequest) =>{
    const clientRepository = AppDataSource.getRepository(Client)

    const findClientVerification  = await clientRepository.findOneBy({
        email: clientData.email
    })

    if(findClientVerification){
        throw new AppError("Client already exists", 409)
    }

    const createdClient = clientRepository.create(clientData)
    await clientRepository.save(createdClient)



    return createdClient
}

