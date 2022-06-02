import { Application } from "express";
import IRouter from "./IRouter";
import { API_URL } from "../Config/Config";
import DefaultController from "../Controllers/DefaultController";

export default class DefaultRouter implements IRouter {
    private app
    private controller

    constructor(app: Application, controller: DefaultController) {
        this.app = app
        this.controller = controller
    }

    initialise(): void {
        this.app.get(API_URL, this.controller.get);
    }
}
