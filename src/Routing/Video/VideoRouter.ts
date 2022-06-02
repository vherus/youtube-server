import { Application } from "express"
import IRouter from "../IRouter"
import { API_URL } from "../../Config/Config"
import VideoController from "../../Controllers/Video/VideoController"

export default class VideoRouter implements IRouter {
    private app
    private controller

    constructor(app: Application, controller: VideoController) {
        this.app = app
        this.controller = controller
    }

    initialise(): void {
        this.app.get(`${API_URL}/video-test`, this.controller.get)
    }
}
