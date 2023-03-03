import { Request, Response } from "express";
import pictureService from "../service/PictureService";
import PictureCreateRequest from "../service/dto/picture/PictureCreateRequest";

export class PictureController {
  async createPicture(request: Request, response: Response) {
    try {
      const picture = new PictureCreateRequest(request);
      await pictureService.createPicture(picture);
      response.status(201).json();
    } catch (exception) {
      response.status(400).json({
        errortype: exception.message,
      });
    }
  }

  async findAllPictures(request: Request, response: Response) {
    try {
      const articles = await pictureService.findAllPicture();
      response.status(201).json(articles);
    } catch (exception) {
      response.status(400).json({
        errortype: exception.message,
      });
    }
  }
}
