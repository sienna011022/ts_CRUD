import { User } from "../../../../../src/entity/User";
import UserCreateRequest from "../../../../../src/service/dto/user/UserCreateRequest"

describe("UserCreateDto test", () => {
  it("UserCreateDto.createUser()는 User를 반환한다", () => {
    const request = {
      userId: "sienna",
      password: "1234",
      email: "sienna011022@naver.com",
    };
    const requestDto = new UserCreateRequest(request);
    expect(requestDto.createUser()).toBeInstanceOf(User);
  })

});
