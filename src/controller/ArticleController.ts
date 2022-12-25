import { Request, Response } from "express";
import createArticleDto from "../service/dto/CreateArticleDto";
import articleService from "../service/ArticleService";

export class ArticleController {
  async createArticle(request: Request, response: Response) {
    try {
      const article = createArticleDto.newArticleDto(request);
      await articleService.createArticle(article);
    } catch (exception) {
      response.status(400).json({
        errortype : exception.message 
      });
    }
    response.status(201).json();
  }
}
