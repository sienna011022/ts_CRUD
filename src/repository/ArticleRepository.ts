import { Article } from "../entity/Article";
import { User } from "../entity/User";
import { AppDataSource } from "../../data-source";
import NotFoundArticleException from "../exception/NotFoundArticleException";
import ArticleUpdateRequest from "../../src/service/dto/article/ArticleUpdateArticleRequest";

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

  public async updateArticleWithValiadation(request: ArticleUpdateRequest) {
    const article = await this.getByArticleNumberAndUserId(
      request.articleNumber,
      request.userId
    );

    if (article == null) {
      throw new NotFoundArticleException();
    }

    this.updateArticle(article, request);
  }

  private async getByArticleNumberAndUserId(
    articleNumber: string,
    userId: string
  ) {
    return await this.articleRepository.findOne({
      relations: {
        user: true,
      },
      where: {
        articleNumber: articleNumber,
        user: {
          userId: userId,
        },
      },
    });
  }

  private async updateArticle(article: Article, request: ArticleUpdateRequest) {
    await this.articleRepository
      .createQueryBuilder("article")
      .update(article)
      .set({ title: request.title, content: request.content })
      .execute();
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
