import { User } from "../../../src/entity/User";

describe("User Entity", () => {
  test("User생성", () => {
    const userId = "sienna1022";
    const email = "sienna1022@email.com";
    const password = "password";

    const user = User.from(userId, password, email);

    expect(user.userId).toBe(userId);
    expect(user.email).toBe(email);
    expect(user.password).toBe(password);
  });
});

