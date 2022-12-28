import pictureRepository from "../../../src/repository/PictureRepository";

import httpMocks from "node-mocks-http";
import { Article } from "../../../src/entity/Article";
import { User } from "../../../src/entity/User";
import articleRepository from "../../../src/repository/ArticleRepository";
import { PictureController } from "../../../src/controller/PictureController";

let req, res, userId, articleId;
let newUser, newArticle;

beforeEach(() => {
  jest.resetModules();
  userId = "sienna1022";
  articleId = 1;
  newUser = User.from(userId, "1234", "sienna1022@email.com");
  newArticle = Article.from("안녕하세요", "김성윤입니다", newUser, articleId);

  req = httpMocks.createRequest();
  res = httpMocks.createResponse();

  pictureRepository.createPicture = jest.fn();
});

describe("PictureController 테스트", () => {
  const pictureController = new PictureController();

  it("사진이 등록되면 201 상태코드를 반환한다", async () => {
    req.params.user_id = userId;
    req.params.article_id = articleId;

    pictureRepository.createPicture = jest.fn();
    articleRepository.getArticleByArticleNumberAndUserId = jest
      .fn()
      .mockImplementation(() => newArticle);

    await pictureController.createPicture(req, res);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });
});
