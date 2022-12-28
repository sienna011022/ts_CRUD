import { User } from "../../../../../src/entity/User";
import { Article } from "../../../../../src/entity/Article";
import CreateArticleDto from "../../../../../src/service/dto/article/ArticleCreateRequest";
import NotFoundUserException from "../../../../../src/exception/NotFoundUserException";

describe("CreateArticleRequest test", () => {
  it("로그인한 유저와 작성자가 일치하는지 비교 후 객체를 반환한다", () => {
    const userId = "sienna1022";
    const request = {
      params: {
        user_id: userId,
      },

      body: {
        title: "행복한 크리스마스 입니다",
        content: "Merry Christmas",
        author: userId,
        articleNumber: 1,
      },
    };
    expect(CreateArticleDto.newArticleDto(request)).toBeInstanceOf(
      CreateArticleDto
    );
  });

  it("로그인한 유저와 작성자가 일치하는지 비교 후 일치하지 않으면 예외 발생", () => {
    const userId = "sienna1022";
    const request = {
      params: {
        user_id: userId,
      },

      body: {
        title: "행복한 크리스마스 입니다",
        content: "merry christmas",
        author: userId + "anotherId",
        articleNumber: 1,
      },
    };
    try {
      CreateArticleDto.newArticleDto(request);
    } catch (exception) {
      expect(exception).toBeInstanceOf(NotFoundUserException);
    }
  });

  it("CreateUserDto 를 User로 매핑한다", () => {
    const request = {
      params: {
        user_id: "sienna1022",
      },

      body: {
        title: "행복한 크리스마스 입니다",
        content: "christmas",
        author: "sienna1022",
        articleNumber: 1,
      },
    };
    const requestDto = CreateArticleDto.newArticleDto(request);
    const newUser = User.from("sienna1022", "1234", "sienna1022@email.com");

    expect(requestDto.createArticle(newUser)).toBeInstanceOf(Article);
  });
});
