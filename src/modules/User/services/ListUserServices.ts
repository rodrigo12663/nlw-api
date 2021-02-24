import { getCustomRepository } from 'typeorm';
import UserRepositories from "../repositories/UserRepositories";


export default class ListUserService {
    async execute(){
        const usersReporsitory = getCustomRepository(UserRepositories);
        const users =await  usersReporsitory.find();
        return users;
    }
}