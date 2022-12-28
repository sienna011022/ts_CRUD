import { AppDataSource } from "../../data-source";
import { Picture } from "../entity/Picture";
export class PictureRepository {
    private pictureRepository;
  
    public constructor() {
      this.pictureRepository = AppDataSource.manager.getRepository(Picture);
    }
  
    public async createPicture(newPicture: Picture) {
      await this.pictureRepository.save(newPicture);
    }
}
let pictureRepository = new PictureRepository();
export default pictureRepository;