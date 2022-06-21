export default interface IUser {
    id: number
    createdAt: Date
    updatedAt: Date
    username: string
    passwordHash: string | undefined
}
