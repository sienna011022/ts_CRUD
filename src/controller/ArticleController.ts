import { Request, Response } from "express";
import createArticleDto from "../service/dto/CreateArticleDto";
import articleService from "../service/ArticleService";

export  class ArticleController {
  async createArticle(request: Request, response: Response) {
    const article = createArticleDto.newArticleDto(request);
    await articleService.createArticle(article);
    response.status(201).json();
  }
}
