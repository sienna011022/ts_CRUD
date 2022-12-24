import { User } from "../entity/User";
import { AppDataSource } from "../../data-source";

class UserRepository {
    public appManager;

    constructor(){
        this.appManager = AppDataSource.manager;
    }

  async createUser(newUser: User) {
    await this.appManager.save(newUser);
    const users = await this.appManager.find(User);
    console.log("Loaded users: ", users);
  
}
}

let userRepository = new UserRepository();
export default userRepository;
