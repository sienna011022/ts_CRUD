import { Request, response, Response } from "express";
import createArticleDto from "../service/dto/article/ArticleCreateRequest";
import articleService from "../service/ArticleService";
import { User } from "src/entity/User";
import { UserService } from "src/service/UserService";

export class ArticleController {
  async createArticle(request: Request, response: Response) {
    try {
      const article = createArticleDto.newArticleDto(request);
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

  async deleteAllArticle(request: Request, response: Response) {
    articleService.deleteAllArticle(request.params.user_id);
      response.status(200).json();
    } catch (exception) {
      response.status(400).json({
        errortype: exception.message,
      });
    }
  }

