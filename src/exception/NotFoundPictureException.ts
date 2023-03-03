import { ErrorType } from "./errorType";

export default class NotFoundPictureException extends Error {
    constructor() {
      super(ErrorType.P001);
      this.name = "NotFoundPictureException";
    }
  }
  