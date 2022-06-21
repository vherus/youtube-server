import express from 'express'
import cors from 'cors'
import { PORT } from './Config/Config'
import Server from './Core/Server'
import DefaultRouter from './Routing/DefaultRouter'
import DefaultController from './Controllers/DefaultController'
import VideoRouter from './Routing/Video/VideoRouter'
import VideoController from './Controllers/Video/VideoController'
import UserRouter from './Routing/User/UserRouter'
import UserController from './Controllers/User/UserController'
import Writer from './DAL/User/Writer'

const app = express()

app.use(cors({
    origin: `http://localhost:${PORT}`
}))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const routers = [
    new DefaultRouter(new DefaultController),
    new VideoRouter(new VideoController),
    new UserRouter(new UserController(new Writer))
]

const server = new Server(app, routers)

server.start()
