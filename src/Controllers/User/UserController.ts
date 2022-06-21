import { Request, Response } from "express";
import CommandBus from "../../CommandBus/CommandBus";
import CreateUser from "../../CommandBus/Commands/User/CreateUser";
import IRawUser from "../../DAL/User/IRawUser";
import IUser from "../../DAL/User/IUser";

export default class UserController {
    private commandBus

    constructor(commandBus: CommandBus) {
        this.commandBus = commandBus
    }

    public async post(req: Request, res: Response): Promise<void> {
        const rawUser: IRawUser = req.body

        const user = await this.commandBus.dispatch<IUser>(new CreateUser(rawUser))

        delete user.passwordHash

        // TODO error handling, validation, JWT

        res.json({ data: user });
    }
}
