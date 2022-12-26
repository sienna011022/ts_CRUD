import { Article } from "../../../entity/Article";
import { User } from "../../../entity/User";
import NotFoundUserException from "../../../exception/NotFoundUserException"
export default class ArticleCreateRequest {
  private title: string;
  private content: string;
  private author: string;

  private constructor(request: any) {
    this.title = request.title;
    this.content = request.content;
    this.author = request.user;
  }

  public createArticle(user: User) {
    return Article.from(this.title, this.content, user);
  }

  public static newArticleDto(request: any) {
    this.isValid(request.body.author, request.params.user_id);
    return new ArticleCreateRequest(request.body);
  }

  private static isValid(author: string, userId: string) {
    if (author != userId) {
      throw new NotFoundUserException();
    }
  }

  public getUser() {
    return this.author;
  }
}
