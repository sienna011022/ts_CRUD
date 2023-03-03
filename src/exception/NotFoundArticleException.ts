import { ErrorType } from "./errorType";

export default class NotFoundArticleException extends Error {
  constructor() {
    super(ErrorType.A001);
    this.name = "NotFoundArticleException";
  }
}
