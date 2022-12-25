import { User } from "../entity/User";
import { Article } from "../entity/Article";
import articleRepository from "../repository/ArticleRepository";
import userRepository from "../repository/UserRepository";
import CreateArticleDto from "./dto/CreateArticleDto";

export class ArticleService {
  public async createArticle(request: CreateArticleDto) {
    const user: User = await userRepository.findUser(request.getUser());
    const newArticle: Article = request.createArticle(user);
    await articleRepository.createArticle(newArticle);
  }
}

let articleService = new ArticleService();
export default articleService;
