export default class NotFoundArticleException extends Error {
  constructor() {
    super("A001");
    this.name = "NotFoundArticleException";
  }
}
