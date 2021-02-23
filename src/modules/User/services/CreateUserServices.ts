import { getCustomRepository, getRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppError';
import User from '../entities/User'
import UserRepositories from '../repositories/UserRepositories';

interface IRequest {
  name: string;
  email: string;
}
export default class CreateUserService {
  public async execute ({ name, email}: IRequest): Promise<User> {
        const usersRepository = getCustomRepository(UserRepositories);
        const emailExists = await usersRepository.findByEmail(email);

        if( emailExists){
            throw new AppError("Email address already used.");
        }
        const user = usersRepository.create({ name, email});
        await usersRepository.save(user);
        return  user;
  }
}
