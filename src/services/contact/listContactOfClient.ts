import AppDataSource from "../../data-source"
import { Client } from "../../entities/client.entity"
import { Contact } from "../../entities/contact.entity"
import { AppError } from "../../errors/AppError"

export const listContactsService = async(id:string)=>{
    const clientRepository = AppDataSource.getRepository(Client)
    const contactsRepository = AppDataSource.getRepository(Contact)

    const client = await clientRepository.findOneBy({
        id
    })

    if(!client){
        throw new AppError("Client non-existent", 400)
    }

    const contacts = await contactsRepository.find({
        where:{
            client:{
                id: client.id
            }
        }
    })

    return contacts




}