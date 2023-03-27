import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";
import { IContactUpdate } from "../../interfaces/contacts/constactInteface";

export const updateContactsService = async (data: IContactUpdate, id:string)=>{

    const contactRepository = AppDataSource.getRepository(Contact)

    const contactExist = await contactRepository.findOneBy({
        id
    })

 

    if(!contactExist){
        throw new AppError("Contact non-exitent", 400)
    }

    const update = contactRepository.create({...contactExist,...data})

    await contactRepository.save(update)
    return update

}