import { DataSource } from "typeorm"
import path from "path"
import "dotenv/config"
import { Contact } from "./entities/contact.entity"
import { Client } from "./entities/client.entity"
import { createTables1679531040898 } from "./migrations/1679531040898-createTables"
import { createIsAdm1679534665785 } from "./migrations/1679534665785-createIsAdm"
import { createIsAdm1679575784391 } from "./migrations/1679575784391-createIsAdm"
import { createCascate1679675398000 } from "./migrations/1679675398000-createCascate"


const AppDataSource =  new DataSource({
    type:"postgres",
    host:process.env.PGHOST,
    port: parseInt(process.env.PGPORT!),
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    logging: true,
    synchronize: false,
    entities: [Contact, Client],
    migrations: [createCascate1679675398000 ]
})

export default AppDataSource