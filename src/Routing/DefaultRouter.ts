import { Application } from "express"
import IRouter from "./IRouter"
import { API_URL } from "../Config/Config"
import DefaultController from "../Controllers/DefaultController"

export default class DefaultRouter implements IRouter {
    private controller

    constructor(controller: DefaultController) {
        this.controller = controller
    }

    initialise(app: Application): void {
        app.get(API_URL, this.controller.get)
    }
}
