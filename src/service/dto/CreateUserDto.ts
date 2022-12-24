import { User } from "../../entity/User";

export class CreateUserDto {
  private userId: string;
  private password: string;
  private email: string;

  public constructor(request: any) {
    this.userId = request.userId;
    this.password = request.password;
    this.email = request.email;
  }

  public static createUserDto(user: User) {
    return new CreateUserDto(user);
  }

  public createUser() {
    return User.from(this.userId, this.password, this.email);
  }
}
