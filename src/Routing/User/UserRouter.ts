import { Application } from "express"
import UserController from "../../Controllers/User/UserController"
import IRouter from "../IRouter"
import { API_URL } from "../../Config/Config"

export default class UserRouter implements IRouter {
    private controller

    constructor(controller: UserController) {
        this.controller = controller
    }

    initialise(app: Application): void {
        app.post(`${API_URL}/user`, this.controller.post)
    }
}