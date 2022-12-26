import { User } from "../entity/User";
import { Article } from "../entity/Article";
import articleRepository from "../repository/ArticleRepository";
import userRepository from "../repository/UserRepository";
import ArticleCreateRequest from "./dto/article/ArticleCreateRequest";
import ArticleResponse from "./dto/article/ArticleResponse";

export class ArticleService {
  public async createArticle(request: ArticleCreateRequest) {
    const user: User = await userRepository.findUser(request.getUser());
    const newArticle: Article = request.createArticle(user);
    await articleRepository.createArticle(newArticle);
  }

  public async findAllArticle(userId: string) {
    let allArticles: ArticleResponse[] = new Array<ArticleResponse>();
    const user = await userRepository.findUser(userId);
    const articles = await articleRepository.findAllArticle(user);

    for (let i = 0; i < articles.length; i++) {
      allArticles.push(new ArticleResponse(articles[i]));
    }
    return allArticles;
  }

  public async deleteAllArticle(userId: string) {
    const user = await userRepository.findUser(userId);
    await articleRepository.deleteAllArticle(user);
  }
}

let articleService = new ArticleService();
export default articleService;
