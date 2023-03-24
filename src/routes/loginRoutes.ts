import {Router} from "express"
import { loginClientController } from "../controllers/clients/loginClientController"

const loginRouter = Router()

loginRouter.post("", loginClientController)

export default loginRouter