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

  public async findAllArticle(userId: string) {
    let allArticles: CreateArticleDto[] = new Array<CreateArticleDto>();
    const user = await userRepository.findUser(userId);
    const articles = await articleRepository.findAllArticle(user);

    for (let i = 0; i < articles.length; i++) {
      allArticles.push(CreateArticleDto.createArticleDto(articles[i]));
    }

    return allArticles;
  }


}

let articleService = new ArticleService();
export default articleService;
