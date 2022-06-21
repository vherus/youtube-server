import { Application } from "express"
import IRouter from "../IRouter"
import { API_URL } from "../../Config/Config"
import VideoController from "../../Controllers/Video/VideoController"

export default class VideoRouter implements IRouter {
    private controller

    constructor(controller: VideoController) {
        this.controller = controller
    }

    initialise(app: Application): void {
        app.get(`${API_URL}/video-test`, this.controller.get)
    }
}
