import { Request, Response } from "express";
import { CreateUserDto } from "../service/dto/CreateUserDto";
import userService from "../service/UserService";

export class UserController {
  async createUser(request: Request, response: Response) {
    const createUserRequest: CreateUserDto = new CreateUserDto(request.body);
    userService.createUser(createUserRequest);
    response.status(201).json();
  }

}
