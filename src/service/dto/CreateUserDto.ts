
import { User } from "../../entity/User"

export class CreateUserDto{

    private userId: string;
    private password: string;
    private email: string;

    constructor(request :any){
        this.userId = request.userId;
        this.password = request.password;
        this.email = request.email;
    }


    createUser() {
        return User.from(
            this.userId,
            this.password,
            this.email,
            );
     
    }
}


