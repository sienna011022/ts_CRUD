export default class NotFoundUserException extends Error{
    constructor(){
        super("U001")
        this.name = "NotFoundUserException"
    }
}