import userRepository from "../repository/UserRepository";
import { CreateUserDto } from "../service/dto/CreateUserDto";

export class UserService{    
    async createUser(createUserDto : CreateUserDto){
    const newUser = createUserDto.createUser();
    await userRepository.createUser(newUser);
    }
}

let userService = new UserService();
export default userService;