import IRawUser from "../../../DAL/User/IRawUser";
import Command from "../../Command";

export default class CreateUser implements Command {
    private _user

    constructor(user: IRawUser) {
        this._user = user
    }

    get user(): IRawUser {
        return this._user
    }

    get name(): string {
        return 'CreateUser'
    }
}
