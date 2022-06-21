import Handler from "../../../Handler";
import IUser from "../../../../DAL/User/IUser";
import CreateUser from "../CreateUser";
import IWriter from "../../../../DAL/IWriter";
import IRawUser from "../../../../DAL/User/IRawUser";
import { hash } from "bcrypt";

export default class CreateUserHandler implements Handler {
    private writer

    constructor(writer: IWriter<IRawUser, IUser>) {
        this.writer = writer
    }

    async handle(command: CreateUser): Promise<IUser> {
        const { username, password } = command.user

        const passwordHash = await hash(password, 10)

        return await this.writer.create({
            username,
            password: passwordHash
        })
    }
}