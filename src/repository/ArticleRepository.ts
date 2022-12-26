import { Article } from "../entity/Article";
import { User } from "../entity/User";
import { AppDataSource } from "../../data-source";
import NotFoundArticleException from "../exception/NotFoundArticleException";

export class ArticleRepository {
  private articleRepository;

  public constructor() {
    this.articleRepository = AppDataSource.manager.getRepository(Article);
  }

  public async createArticle(newArticle: Article) {
    await this.articleRepository.save(newArticle);
  }

  public async findAllArticle(user: User) {
    const articles = await this.articleRepository.find({
      where: [{ user: user }],
    });

    if (articles.length == 0) {
      throw new NotFoundArticleException();
    }

    return articles;
  }

  public async deleteAllArticle(user: User) {
    this.articleRepository.delete({
      where: [{ user: user }],
    });
  }
}

let articleRepository = new ArticleRepository();
export default articleRepository;
