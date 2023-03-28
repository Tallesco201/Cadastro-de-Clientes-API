export interface IClientRequest{
    name: string;
    email: string;
    telephone:string;
    password:string;
    isAdm:boolean;
}

export interface IClient{
    id:string;
    name:string;
    email:string;
    telephone:string;
    createdAt:string;
    updatedAt:string;
}

export interface IClientUpdate{
    name?: string;
    email?: string;
    telephone?:string;
    password?:string;
    isAdm?:boolean;
    
}

export interface IClientLogin {
    email: string
    password: string
}