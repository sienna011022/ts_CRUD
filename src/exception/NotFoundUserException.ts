import { ErrorType } from "./errorType";

export default class NotFoundUserException extends Error {
  constructor() {
    super(ErrorType.U001);
    this.name = "NotFoundUserException";
  }
}
