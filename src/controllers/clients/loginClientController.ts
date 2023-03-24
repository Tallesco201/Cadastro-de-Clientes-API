import { Request, Response } from "express";
import { IClientLogin } from "../../interfaces/clients/clientsInterface";
import { loginClientService } from "../../services/client/loginClienteService";

export const loginClientController = async(req: Request, res: Response)=>{
    const dataLogin:IClientLogin = req.body
    const login = await loginClientService(dataLogin)
    return res.status(200).json(login)
}