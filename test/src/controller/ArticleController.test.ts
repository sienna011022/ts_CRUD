import { ArticleController } from "../../../src/controller/ArticleController";
import httpMocks from "node-mocks-http";
import articleRepository from "../../../src/repository/ArticleRepository";
import userRepository from "../../../src/repository/UserRepository";
import { Article } from "../../../src/entity/Article";
import { User } from "../../../src/entity/User";
const newArticle = require("../data/new-article.json");

let req, res;
let user;
const userId = "sienna1022"
beforeEach(() => {
  user = User.from(userId, "1234", "sienna011022@naver.com");
  articleRepository.createArticle = jest.fn();
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  userRepository.findUser = jest.fn().mockImplementation(() => user);
});

describe("ArticleController 테스트", () => {
  const articleController = new ArticleController();

  it("게시물 등록 함수가 존재한다", () => {
    expect(typeof articleController.createArticle).toBe("function");
  });

  it("게시물이 등록되면 201 상태코드를 반환한다", async () => {
    req.params.user_id = userId;
    req.body = newArticle;
    await articleController.createArticle(req, res);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });

  it("모든 게시물을 조회한다", async () => {
    const requestArticle1 = Article.from("딸기", "딸기는 맛있어", user);
    const requestArticle2 = Article.from("바나나", "바나나는 맛있어", user);

    const allArticles = new Array<Article>(requestArticle1, requestArticle2);

    articleRepository.findAllArticle = jest
      .fn()
      .mockImplementation(() => allArticles);

    await articleController.findAllArticle(req, res);
    expect(res._getJSONData().length).toBe(2);
  });
});
