import userRepository from "../repository/UserRepository";
import { CreateUserDto } from "../service/dto/CreateUserDto";

export class UserService {
  async createUser(createUserDto: CreateUserDto) {
    const newUser = createUserDto.createUser();
    await userRepository.createUser(newUser);
  }

  async findUsers() {
    let allUsers : CreateUserDto[] = new Array<CreateUserDto>();
    const users = await userRepository.findUsers();
    for(let i = 0 ; i < users.length ; i++){
      allUsers.push(CreateUserDto.createUserDto(users[i]));
    }
    return allUsers;
  }
}

let userService = new UserService();
export default userService;
