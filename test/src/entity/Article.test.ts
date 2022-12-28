import { Article } from "../../../src/entity/Article";
import { User } from "../../../src/entity/User";

describe("Article Entity", () => {
  test("Article 생성", () => {
    const newUser = User.from("sienna1022", "1234", "sienna1022@email.com");

    const title = "안녕하세요";
    const content = "김성윤입니다";
    const user = newUser;
    const articleNumber = 1;
    const article = Article.from(title, content, user,articleNumber);

    expect(article.title).toBe(title);
    expect(article.content).toBe(content);
    expect(article.user).toBe(newUser);
  });
});
