import { ErrorType } from "./errorType";

export default class IllegalUserException extends Error {
  constructor() {
    super(ErrorType.U002);
    this.name = "IllegalUserException";
  }
}
