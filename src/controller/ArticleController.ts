import { Request, response, Response } from "express";
import articleCreateRequest from "../service/dto/article/ArticleCreateRequest";
import articleService from "../service/ArticleService";
import ArticleUpdateRequest from "../service/dto/article/ArticleUpdateArticleRequest";

export class ArticleController {
  async createArticle(request: Request, response: Response) {
    try {
      const article = articleCreateRequest.newArticleDto(request);
      await articleService.createArticle(article);
      response.status(201).json();
    } catch (exception) {
      response.status(400).json({
        errortype: exception.message,
      });
    }
  }

  async findAllArticle(request: Request, response: Response) {
    try {
      const articles = await articleService.findAllArticle(
        request.params.user_id
      );
      response.status(201).json(articles);
    } catch (exception) {
      response.status(400).json({
        errortype: exception.message,
      });
    }
  }

  async updateArticle(request: Request, response: Response) {
    try {
      const updateRequest = new ArticleUpdateRequest(request);
      const articles = await articleService.updateArticle(updateRequest);
      response.status(204).json(articles);
    } catch (exception) {
      response.status(400).json({
        errortype: exception.message,
      });
    }
  }

  async deleteAllArticle(request: Request, response: Response) {
    try {
      articleService.deleteAllArticle(request.params.user_id);
      response.status(200).json();
    } catch (exception) {
      response.status(400).json({
        errortype: exception.message,
      });
    }
  }
d
  async deleteArticle(request: Request, response: Response) {
    try {
      articleService.deleteArticle(
        request.params.user_id,
        request.params.article_id
      );
      response.status(200).json();
    } catch (exception) {
      response.status(400).json({
        errortype: exception.message,
      });
    }
  }
}
