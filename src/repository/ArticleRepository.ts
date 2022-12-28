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

  public async findAllArticle(userId: string) {
    const articles = await this.articleRepository
      .createQueryBuilder("article")
      .leftJoinAndSelect("article.user", "user")
      .where("user.userId = :userId", { userId: userId })
      .getMany();

    if (articles.length == 0) {
      throw new NotFoundArticleException();
    }

    return articles;
  }

  public async deleteAllArticle(user: User) {
    this.articleRepository
      .createQueryBuilder("article")
      .delete()
      .from(Article)
      .where({ user: user })
      .execute();
  }
}

let articleRepository = new ArticleRepository();
export default articleRepository;
