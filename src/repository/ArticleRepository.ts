import { Article } from "../entity/Article";
import { AppDataSource } from "../../data-source";

export class ArticleRepository {
  private articleRepository;

  public constructor() {
    this.articleRepository = AppDataSource.manager.getRepository(Article);
  }

  public async createArticle(newArticle: Article) {
    await this.articleRepository.save(newArticle);
  }
}

let articleRepository = new ArticleRepository();
export default articleRepository;
