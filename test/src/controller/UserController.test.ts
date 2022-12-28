import { UserController } from "../../../src/controller/UserController";
import httpMocks from "node-mocks-http";
import repository from "../../../src/repository/UserRepository";
import { User } from "../../../src/entity/User";
import * as newUserData from "../data/new-user.json";

let req, res;
beforeEach(() => {
  jest.resetModules();
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
});

describe("UserController 테스트", () => {
  const userController = new UserController();

  it("유저 등록 함수가 존재한다", () => {
    expect(typeof userController.createUser).toBe("function");
  });

  it("유저가 등록되면 201 상태코드를 반환한다", async () => {
    req.body = newUserData
    repository.createUser = jest.fn();
    await userController.createUser(req, res);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });

  it("모든 유저를 조회한다", async () => {
    const requestUser1 = User.from("sienna1022", "1111", "111@naver.com");
    const requestUser2 = User.from("sienna1022", "2222", "222@naver.com");
    const allUsers = new Array<User>(requestUser1, requestUser2);

    repository.findUsers = jest.fn().mockImplementation(() => allUsers);
    await userController.findUsers(req, res);

    expect(res._getJSONData().length).toBe(2);
  });
});
