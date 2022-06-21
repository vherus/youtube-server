import { Request, Response } from "express";
import IWriter from "../../DAL/IWriter";
import IRawUser from "../../DAL/User/IRawUser";
import IUser from "../../DAL/User/IUser";

export default class UserController {
    private writer

    constructor(writer: IWriter<IRawUser, IUser>) {
        this.writer = writer
    }

    public post(req: Request, res: Response): void {
        const rawUser: IRawUser = req.body

        // TODO hash password, create & send token
        // TODO error handling

        res.json({ data: rawUser });
    }
}
