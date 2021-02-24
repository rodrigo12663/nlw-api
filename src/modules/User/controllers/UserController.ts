import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserServices";
import ListUserService from "../services/ListUserServices";


export default class UserController{
    async create(req: Request,res: Response){
        const { name, email} = req.body;
        const createUser = new CreateUserService();
        const user = await createUser.execute({name,email});
        return res.status(201).json( user);
    }
     async show(req: Request,res: Response){
       
        const ListUser = new ListUserService();
        const users = await ListUser.execute();
        return res.status(201).json(users);
    }
}