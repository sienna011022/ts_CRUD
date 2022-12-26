import userRepository from "../repository/UserRepository";
import UserCreateRequest from "./dto/user/UserCreateRequest";
import UserResponse from "./dto/user/UserResponse";

export class UserService {
  public async createUser(userRequest: UserCreateRequest) {
    const newUser = userRequest.createUser();
    await userRepository.createUser(newUser);
  }

  public async findUsers() {
    let allUsers: UserResponse[] = new Array<UserResponse>();
    const users = await userRepository.findUsers();
    for (let i = 0; i < users.length; i++) {
      allUsers.push(new UserResponse(users[i]));
    }
    return allUsers;
  }
}

let userService = new UserService();
export default userService;
