import { Request, Response } from "express";
import UserResponse from "./../service/dto/user/UserResponse";
import UserCreateRequest from "../service/dto/user/UserCreateRequest";
import userService from "../service/UserService";

export class UserController {
  async createUser(request: Request, response: Response) {
    const createUserRequest: UserCreateRequest = new UserCreateRequest(request.body);
    userService.createUser(createUserRequest);
    response.status(201).json();
  }

  async findUsers(response: Response) {
    const allUsers: UserResponse[] = await userService.findUsers();
    response.status(200).json(allUsers);
  }
}
