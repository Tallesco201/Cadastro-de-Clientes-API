import { Router } from "express";
import { cretedContactsControllers, deleteContactController, listContactofClientsController, updateContactsController } from "../controllers/contacts/contactControllers";
import { custumerAndAdmAndProfileUser } from "../middlewares/custumerAndAdmAndProfileUser.middleware";
import {verifyAutheticationOfToken} from "../middlewares/verifyAurh.middlewares"

const contactsRouter = Router()

contactsRouter.post("/:id", verifyAutheticationOfToken,custumerAndAdmAndProfileUser ,cretedContactsControllers)

contactsRouter.delete("/delete/:id", verifyAutheticationOfToken, custumerAndAdmAndProfileUser ,deleteContactController)

contactsRouter.get("/list/:id", verifyAutheticationOfToken,custumerAndAdmAndProfileUser , listContactofClientsController)

contactsRouter.patch("/update/:id", verifyAutheticationOfToken,custumerAndAdmAndProfileUser ,updateContactsController)

export default contactsRouter