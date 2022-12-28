import { Article } from "../entity/Article";
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
    const article = await this.getArticleByArticleNumberAndUserId(
      request.articleNumber,
      request.userId
    );

    if (article == null) {
      throw new NotFoundArticleException();
    }

    this.updateArticle(article, request);
  }

  public async getArticleByArticleNumberAndUserId(
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

  public async deleteAllArticle(userId) {
    this.articleRepository
      .createQueryBuilder("article")
      .delete({
        relations: {
          user: true,
        },
        where: {
          user: {
            userId: userId,
          },
        },
      })
      .execute();
  }

  public async deleteArticle(userId, articleNumber) {
    const targetArticle = await this.getArticleByArticleNumberAndUserId(
      articleNumber,
      userId
    );
    if (targetArticle == null) {
      throw new Error();
    }
    this.articleRepository
      .createQueryBuilder("article")
      .delete(targetArticle)
      .execute();
  }
}

let articleRepository = new ArticleRepository();
export default articleRepository;
