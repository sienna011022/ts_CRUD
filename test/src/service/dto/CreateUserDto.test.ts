import { User } from "../../../../src/entity/User";
import { CreateUserDto } from "../../../../src/service/dto/CreateUserDto";

test("CreateUserDto 객체를 반환한다", () => {
  const request = {
    userId: "sienna",
    password: "1234",
    email: "sienna011022@naver.com",
  };
  expect(new CreateUserDto(request)).toBeInstanceOf(CreateUserDto);
});

test("CreateUserDto 를 User로 매핑한다", () => {
  const request = {
    userId: "sienna",
    password: "1234",
    email: "sienna011022@naver.com",
  };
  const requestDto = new CreateUserDto(request);

  expect(requestDto.createUser()).toBeInstanceOf(User);
});
