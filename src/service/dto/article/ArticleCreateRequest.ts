import { Article } from "../../../entity/Article";
import { User } from "../../../entity/User";
import NotFoundUserException from "../../../exception/NotFoundUserException"
export default class ArticleCreateRequest {
  private title: string;
  private content: string;
  private user: string;

  private constructor(request: any) {
    this.title = request.title;
    this.content = request.content;
    this.user = request.user;
  }

  public createArticle(user: User) {
    return Article.from(this.title, this.content, user);
  }

  public static newArticleDto(request: any) {
    this.isValid(request.body.user, request.params.user_id);
    return new ArticleCreateRequest(request.body);
  }

  private static isValid(requestUser: string, userId: string) {
    if (requestUser != userId) {
      throw new NotFoundUserException();
    }
  }

  public getUser() {
    return this.user;
  }
}
