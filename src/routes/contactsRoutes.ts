import { Router } from "express";
import { cretedContactsControllers, deleteContactController, listContactofClientsController, updateContactsController } from "../controllers/contacts/contactControllers";
import {verifyAutheticationOfToken} from "../middlewares/verifyAurh.middlewares"

const contactsRouter = Router()

contactsRouter.post("/:id", verifyAutheticationOfToken, cretedContactsControllers)

contactsRouter.delete("/:id", verifyAutheticationOfToken, deleteContactController)

contactsRouter.get("/:id", verifyAutheticationOfToken, listContactofClientsController)

contactsRouter.patch("/:id", verifyAutheticationOfToken,updateContactsController)

export default contactsRouter