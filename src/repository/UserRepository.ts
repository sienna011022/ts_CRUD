import { User } from "../entity/User";
import { AppDataSource } from "../../data-source";

class UserRepository {
  public repository;

  public constructor() {
    this.repository = AppDataSource.manager.getRepository(User);
  }

  public async createUser(newUser: User) {
    await this.repository.save(newUser);
  }

  public async findUsers() {
    return await this.repository.find(User);
  }

  public async findUser(userId: string) {
    return await this.repository.findOne({
      where: [{ userId: userId }],
    });
  }
}

let userRepository = new UserRepository();
export default userRepository;
