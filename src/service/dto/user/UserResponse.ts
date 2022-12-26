import { User } from "../../../entity/User";

export default class UserResponse {
    private userId: string;
    private email: string;
  
    public constructor(request : User) {
      this.userId = request.userId;
      this.email = request.email;
    }
  }
  