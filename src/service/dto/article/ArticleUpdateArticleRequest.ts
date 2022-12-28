export default class ArticleUpdateRequest {
  public title: string;
  public content: string;
  public articleNumber : string;
  public userId : string;

  public constructor(request: any) {
    this.title = request.body.title;
    this.content = request.body.content;
    this.articleNumber = request.params.article_id;
    this.userId = request.params.user_id;
  }
}
