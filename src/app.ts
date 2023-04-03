import express from 'express';
import "express-async-errors"
import handleError from './errors/handleError';
import clientRouter from './routes/clientRoutes';
import contactsRouter from './routes/contactsRoutes';
import loginRouter from './routes/loginRoutes';
import cors, { CorsOptions } from 'cors';
import swaggerUi from "swagger-ui-express"
import swaggerDocs  from './swagger.json';


const app = express();
const corsOptions: CorsOptions = {
    origin: ["http://localhost:3000"],
  };
  app.use(express.json())
  app.use(cors(corsOptions));


app.use("/client", clientRouter)
app.use("/contact", contactsRouter)
app.use("/login", loginRouter)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(handleError)


export default app