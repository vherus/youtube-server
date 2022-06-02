import express, { Application } from "express";
import cors from 'cors'
import Server from "../Core/Server";
import DefaultRouter from "../Routing/DefaultRouter";
import IRouter from "../Routing/IRouter";
import { PORT } from "../Config/Config";
import DefaultController from "../Controllers/DefaultController";

export default class DIContainer {
    private app

    constructor(app: Application) {
        this.app = app

        this.app.use(cors({
            origin: `http://localhost:${PORT}`
        }));
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }

    get Server(): Server {
        return new Server(this.app, this.Routers)
    }

    private get Routers(): IRouter[] {
        return [
            new DefaultRouter(this.app, new DefaultController)
        ]
    }
}
