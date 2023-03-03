import { Article } from "../entity/Article";
import articleRepository from "../repository/ArticleRepository";
import pictureRepository from "../repository/PictureRepository";
import PictureCreateRequest from "./dto/picture/PictureCreateRequest";
import { Picture } from "../entity/Picture";
import PictureResponse from "../service/dto/picture/PictureResponse";
import userRepository from "../repository/UserRepository";

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

  public async findAllPicture() {
    let allPicture: PictureResponse[] = new Array<PictureResponse>();
    const pictures = await pictureRepository.getAllPicture();

    for (let i = 0; i < pictures.length; i++) {
      allPicture.push(new PictureResponse(pictures[i]));
    }
    return allPicture;
  }
}

let pictureService = new PictureService();
export default pictureService;
