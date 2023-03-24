import { Request, Response } from "express";
import { IClientRequest, IClientUpdate } from "../../interfaces/clients/clientsInterface";
import { createdClientService } from "../../services/client/createClientService";
import { deleteClienteService } from "../../services/client/deleteClientService";
import { listClientService } from "../../services/client/listClientService";
import { updateClientService } from "../../services/client/updateClientService";


export const createdClientController = async(req:Request, res:Response)=>{
    const clientDataBody: IClientRequest = req.body;
    const  newClient = await createdClientService(clientDataBody)

    return res.status(201).json(newClient)
}

export const listClientsController = async (req: Request, res: Response)=>{
    const clients = await listClientService()

    return res.status(200).json(clients)
}

export const updateClientsController = async (req: Request, res: Response)=>{
    const clietsUpdated :IClientUpdate= req.body
    const idClient= req.params.id
    const idLogin = req.client.id
    const isAdm = req.client.isAdm

    const update = await updateClientService(clietsUpdated, idClient, idLogin, isAdm)

    return res.status(200).json(update)
}

export const deleteClientController = async (req: Request, res: Response) => {
    const idLogin = req.client.id
    const isAdm = req.client.isAdm
    const deleteClient = await deleteClienteService(req.params.id, idLogin, isAdm)
    return res.status(204).json(deleteClient)
}