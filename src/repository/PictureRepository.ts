import NotFoundPictureException from "../exception/NotFoundPictureException";
import { AppDataSource } from "../../data-source";
import { Picture } from "../entity/Picture";
import { Article } from "../entity/Article";
import { User } from "../entity/User";
export class PictureRepository {
  private pictureRepository;

  public constructor() {
    this.pictureRepository = AppDataSource.manager.getRepository(Picture);
  }

  public async createPicture(newPicture: Picture) {
    await this.pictureRepository.save(newPicture);
  }

  public async getAllPicture() {
    const pictures = await this.pictureRepository.find();

    if (pictures.length == 0) {
      throw new NotFoundPictureException();
    }

    return pictures;
  }
}

let pictureRepository = new PictureRepository();
export default pictureRepository;
