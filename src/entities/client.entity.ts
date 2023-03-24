import { 
    Entity, 
    PrimaryGeneratedColumn,
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    OneToMany,
    BeforeInsert,BeforeUpdate
    } from "typeorm";
    import { hashSync } from 'bcryptjs'

import { Contact } from "./contact.entity";
    


    @Entity("clients")
    class Client {
        @PrimaryGeneratedColumn("uuid")
        id: string;

        @Column({length:80})
        name: string;

        @Column({length:120, unique: true} )
        email: string;

        @Column({length:120})
        password: string;

        @Column({length:14})
        telephone:string;

        @Column({default:false})
        isAdm: boolean;

        @CreateDateColumn()
        createdAt: Date;

        @UpdateDateColumn()
        updatedAt: Date;

        @OneToMany(()=> Contact, contact=>contact.client)
        contact:Contact[]

        @BeforeUpdate()
        @BeforeInsert()
        hashPassword(){
        this.password=hashSync(this.password,10)
    }
    }

        
        

  



    export {Client}
