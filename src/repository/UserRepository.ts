import { User } from "../entity/User";
import { AppDataSource } from "../../data-source";

class UserRepository {
  public appManager;

  constructor() {
    this.appManager = AppDataSource.manager;
  }

  async createUser(newUser: User) {
    await this.appManager.save(newUser);
  }

  async findUsers() {
    return await this.appManager.find(User);
  }
}

let userRepository = new UserRepository();
export default userRepository;
