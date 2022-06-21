import IWriter from "../IWriter"
import dbClient from "../Prisma/dbClient"
import IRawUser from "./IRawUser"
import IUser from "./IUser"

export default class Writer implements IWriter<IRawUser, IUser> {
    async create(entity: IRawUser): Promise<IUser> {
        const createdUser = await dbClient.user.create({
            data: {
                username: entity.username,
                passwordHash: entity.password
            }
        })

        return createdUser
    }
}
