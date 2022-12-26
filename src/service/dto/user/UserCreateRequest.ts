import { User } from "../../../entity/User";

export default class UserCreateRequest {
  private userId: string;
  private password: string;
  private email: string;

  public constructor(request: any) {
    this.userId = request.userId;
    this.password = request.password;
    this.email = request.email;
  }

  public createUser() {
    return User.from(this.userId, this.password, this.email);
  }
}
