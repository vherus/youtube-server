import { Application } from "express";
import IRouter from "../Routing/IRouter";
import { PORT } from "../Config/Config";

export default class Server {
    private app
    private routers

    constructor(app: Application, routers: IRouter[]) {
        this.app = app
        this.routers = routers
    }

    public start(): void {
        this.routers.forEach(router => router.initialise())
        this.app.listen(PORT, () => console.log(`API server listening on port ${PORT}`))
    }
}
