import { Request, Response } from "express";
import { getRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import User from "../entities/User";


export default class UserController{
    async create(req: Request,res: Response){
        const { name, email} = req.body;
      
        const usersRepository = getRepository(User);
        const emailExists = await usersRepository.findOne({ where: { email } });


        if( emailExists){
            throw new AppError("adress used");
        }
   

        const user = usersRepository.create({ name, email});
        await usersRepository.save(user);
        res.send( user);
        
    }
}