import { Article } from "../../../entity/Article";

export default class ArticleResponse {
  private title: string;
  private content: string;

  public constructor(request: Article) {
    this.title = request.title;
    this.content = request.content;
  }
}
