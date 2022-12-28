import { Article } from "../../../entity/Article";
import { User } from "../../../entity/User";
import NotFoundUserException from "../../../exception/NotFoundUserException"
export default class ArticleCreateRequest {
  private title: string;
  private content: string;
  private author: string;
  private articleNumber: number;

  private constructor(request: any) {
    this.articleNumber = request.articleNumber;
    this.title = request.title;
    this.content = request.content;
    this.author = request.author;
  }

  public createArticle(user: User) {
    return Article.from(this.title, this.content, user,this.articleNumber);
  }

  public static newArticleRequest(request: any) {
    this.isValid(request.body.author, request.params.user_id);
    return new ArticleCreateRequest(request.body);
  }

  private static isValid(requestUser: string, userId: string) {
    if (requestUser != userId) {
      throw new NotFoundUserException();
    }
  }

  public getUser() {
    return this.author;
  }
}
