import { Article } from "../entity/Article";
import articleRepository from "../repository/ArticleRepository";
import pictureRepository from "../repository/PictureRepository";
import PictureCreateRequest from "./dto/picture/PictureCreateRequest";
import { Picture } from "../entity/Picture";

export class PictureService {

  public async createPicture(request: PictureCreateRequest) {
    const article: Article =
      await articleRepository.getArticleByArticleNumberAndUserId(
        request.articleNumber,
        request.userId
      );
    const newPicture: Picture = request.createPicture(article);
    await pictureRepository.createPicture(newPicture);
  }
}

let pictureService = new PictureService();
export default pictureService;
