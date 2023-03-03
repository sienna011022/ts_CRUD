import { Picture } from "../../../../../src/entity/Picture";
import { User } from "../../../../../src/entity/User";
import { Article } from "../../../../../src/entity/Article";
import PictureResponse from "../../../../../src/service/dto/picture/PictureResponse";

describe("PictureResponse test", () => {
  it("PictureResponse를 반환한다", () => {
    const newUser = User.from("sienna1022", "1234", "sienna1022@email.com");
    const newArticle = Article.from("안녕하세요", "김성윤입니다", newUser, 1);
    const picture = Picture.from("picture url", newArticle);
    expect(new PictureResponse(picture)).toBeInstanceOf(PictureResponse);
  });
});
