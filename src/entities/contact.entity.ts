import { 
    Entity, 
    PrimaryGeneratedColumn,
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    ManyToOne
    } from "typeorm";
import { Client } from "./client.entity";


    @Entity("contacts")
    class Contact {
        @PrimaryGeneratedColumn("uuid")
        id: string;

        @Column({length:80})
        name: string;

        @Column({length:120})
        email: string;

        @Column({length:14})
        telephone:string;

        @CreateDateColumn()
        createdAt: Date;

        @UpdateDateColumn()
        updatedAt: Date;

        @ManyToOne(()=> Client, client=>client.contact,{
            onDelete: 'CASCADE'
        })
        client:Client


        
        

  


    }

    export {Contact}