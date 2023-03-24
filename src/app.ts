import express from 'express';
import "express-async-errors"
import handleError from './errors/handleError';
import clientRouter from './routes/clientRoutes';
import loginRouter from './routes/loginRoutes';


const app = express();
app.use(express.json())

app.use("/client", clientRouter)
app.use("/login", loginRouter)
app.use(handleError)


export default app