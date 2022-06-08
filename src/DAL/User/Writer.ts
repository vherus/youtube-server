import { User } from "@prisma/client"
import IWriter from "../IWriter"
import dbClient from "../Prisma/dbClient"
import IUser from "./IUser"

export default class Writer implements IWriter<IUser, User> {
    async create(entity: IUser): Promise<User> {
        const createdUser = await dbClient.user.create({
            data: {
                username: entity.username,
                passwordHash: entity.passwordHash
            }
        })

        return createdUser
    }
}
