import { Picture } from "../../../src/entity/Picture";
import { Article } from "../../../src/entity/Article";
import { User } from "../../../src/entity/User";

describe("Picture Entity", () => {
  test("Picture 생성", () => {
    const newUser = User.from("sienna1022", "1234", "sienna1022@email.com");
    const newArticle = Article.from("안녕하세요", "김성윤입니다", newUser, 1);
    const pictureUrl = "사진 주소";
    const newPicture = Picture.from(pictureUrl,newArticle);

    expect(newPicture.pictureUrl).toBe(pictureUrl);

  });
});
