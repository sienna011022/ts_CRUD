import { Picture } from "../../../entity/Picture";

export default class PictureResponse {
  public pictureUrl: string;

  public constructor(request: Picture) {
    this.pictureUrl = request.pictureUrl;
  }
}
