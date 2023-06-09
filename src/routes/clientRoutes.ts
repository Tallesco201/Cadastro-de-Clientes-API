import {Router} from "express"
import { createdClientController, deleteClientController, listClientsController, updateClientsController } from "../controllers/clients/clientControllers"
import { custumerAndAdmAndProfileUser } from "../middlewares/custumerAndAdmAndProfileUser.middleware"
import { userAndAdmMiddleware } from "../middlewares/theUserAndAdm.middlewares"
import { verifyAutheticationOfToken } from "../middlewares/verifyAurh.middlewares"

const clientRouter = Router()

//CRIAÇÃO DO CLIENTE
clientRouter.post("", createdClientController)

//LISTAGEM DE TODOS OS CLIENTES
clientRouter.get("/list",verifyAutheticationOfToken,userAndAdmMiddleware,listClientsController )

//ATUALIZAÇÃO 
clientRouter.patch("/update/:id", verifyAutheticationOfToken,custumerAndAdmAndProfileUser, updateClientsController)

//DELEÇÃO 
clientRouter.delete("/delete/:id",verifyAutheticationOfToken,custumerAndAdmAndProfileUser,deleteClientController )

export default clientRouter