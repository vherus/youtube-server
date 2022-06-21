import { Application } from "express"

export default interface IRouter {
    initialise(app: Application): void
}
