import { User } from "../../../../../src/entity/User";
import UserResponse from "../../../../../src/service/dto/user/UserResponse";

describe("UserResponse test", () => {
  it("UserResponse를 반환한다", () => {
    const user = User.from("sienna1022", "1234", "sienna011022@naver.com");
    expect(new UserResponse(user)).toBeInstanceOf(UserResponse);
  });
});
