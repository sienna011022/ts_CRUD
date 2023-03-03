import { User } from "../entity/User";
import { Article } from "../entity/Article";
import articleRepository from "../repository/ArticleRepository";
import userRepository from "../repository/UserRepository";
import ArticleCreateRequest from "./dto/article/ArticleCreateRequest";
import ArticleResponse from "./dto/article/ArticleResponse";
import ArticleUpdateRequest from "./dto/article/ArticleUpdateArticleRequest";
import NotFoundArticleException from "../exception/NotFoundArticleException";

export class ArticleService {
  public async createArticle(request: ArticleCreateRequest) {
    const user: User = await userRepository.findUser(request.getUser());
    const newArticle: Article = request.createArticle(user);
    await articleRepository.createArticle(newArticle);
  }

  public async findAllArticle(userId: string) {
    let allArticles: ArticleResponse[] = new Array<ArticleResponse>();
    const articles = await articleRepository.findAllArticle(userId);

    for (let i = 0; i < articles.length; i++) {
      allArticles.push(new ArticleResponse(articles[i]));
    }

    return allArticles;
  }

  public async updateArticle(request: ArticleUpdateRequest) {
    await articleRepository.updateArticleWithValiadation(request);
  }

  public async deleteAllArticle(userId: string) {
    articleRepository.deleteAllArticle(userId);
  }

  public async deleteArticle(userId: string, articleId: string) {
    articleRepository.deleteArticle(userId,articleId);
  }
}

let articleService = new ArticleService();
export default articleService;
