import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";
import { IContactBody } from "../../interfaces/contacts/constactInteface";

export const cretedContactsService = async(dataContactBody:IContactBody,id:string)=>{
    const clientRepository = AppDataSource.getRepository(Client)
    const contactRepository = AppDataSource.getRepository(Contact)

    const clientExist = await clientRepository.findOneBy({
        id
    })

    if(!clientExist){
        throw new AppError("Client not exists", 400);
    }

   const contactExists = await contactRepository.findOneBy({
    email: dataContactBody.email
   }) 
   if(contactExists){
    throw new AppError(" Contact already exists", 400);
   }

   const instance = contactRepository.create({
    ...dataContactBody,
    client:{id:clientExist.id}

   })

   await contactRepository.save(instance)

   return instance

}