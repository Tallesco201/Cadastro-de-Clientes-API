import { Request, Response } from "express";
import { IContactBody, IContactUpdate } from "../../interfaces/contacts/constactInteface";
import { cretedContactsService } from "../../services/contact/createdContactService";
import { deleteContactService } from "../../services/contact/deleteContactService";
import { listContactsService } from "../../services/contact/listContactOfClient";
import { updateContactsService } from "../../services/contact/updateContactService";


export const cretedContactsControllers = async (req:Request, res:Response)=>{
    const contactsBody:IContactBody = req.body
    const id = req.params.id
    const serviceContacts = await cretedContactsService(contactsBody, id)
    return res.status(201).json(serviceContacts)


}


export const listContactofClientsController = async (req: Request, res: Response)=>{
    const id = req.params.id
    const listServiceContacts = await listContactsService(id)
    return res.status(200).json(listServiceContacts)

}

export const updateContactsController = async (req: Request, res: Response) => {
    const id = req.params.id
    const updateBody:IContactUpdate= req.body
    const updateContacts= await updateContactsService(updateBody,id)
    return res.status(200).json(updateContacts)
}

export const deleteContactController = async (req: Request, res: Response) => {
   
    const deleteClient = await deleteContactService(req.params.id)
    return res.status(204).json(deleteClient)
}
