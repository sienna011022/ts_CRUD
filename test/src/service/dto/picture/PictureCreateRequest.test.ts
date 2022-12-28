import { Picture } from "../../../../../src/entity/Picture";
import { User } from "../../../../../src/entity/User";
import { Article } from "../../../../../src/entity/Article";
import PictureCreateRequest from "../../../../../src/service/dto/picture/PictureCreateRequest";

describe("PictureCreateRequest test", () => {
    it("PictureCreateDto.createPicture()는 Picture를 반환한다", () => {
      const newUser = User.from("sienna1022", "1234", "sienna1022@email.com");
      const newArticle = Article.from("안녕하세요", "김성윤입니다", newUser, 1);
      const request = {
        params: {
          user_id: "sienna1022",
          article_id: 1,
        },
  
        body: {
          pictureUrl : "사진 주소"
        },
      };
      const requestDto = new PictureCreateRequest(request);
      expect(requestDto.createPicture(newArticle)).toBeInstanceOf(Picture);
    })
  
  });