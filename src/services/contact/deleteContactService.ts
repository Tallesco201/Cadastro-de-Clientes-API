import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { AppError } from "../../errors/AppError"

export const deleteContactService = async (id:string) => {
    const contactRepository =  AppDataSource.getRepository(Contact)


        const contactExists = await contactRepository.findOneBy({
            id
        })
    
        if(!contactExists){
            throw new AppError(' Contact non-existent', 404)
        }
    
        await contactRepository.delete(id)



    
}