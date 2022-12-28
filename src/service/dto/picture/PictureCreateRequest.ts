import { Article } from "../../../entity/Article";
import { Picture } from "../../../entity/Picture";

export default class PictureCreateRequest {
  public pictureUrl: string;
  public articleNumber: string;
  public userId: string;

  public constructor(request: any) {
    this.pictureUrl = request.body.pictureUrl;
    this.articleNumber = request.params.article_id;
    this.userId = request.params.user_id;
  }

  public createPicture(article:Article) {
    return Picture.from(this.pictureUrl,article);
  }

}
