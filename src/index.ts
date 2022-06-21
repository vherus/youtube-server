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
import Registry from './CommandBus/Registry'
import CreateUserHandler from './CommandBus/Commands/User/Handlers/CreateUserHandler'
import CommandBus from './CommandBus/CommandBus'

const app = express()

app.use(cors({
    origin: `http://localhost:${PORT}`
}))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const cmdRegistry = new Registry([
    ['CreateUser', new CreateUserHandler(new Writer)]
])

const commandBus = new CommandBus(cmdRegistry)

const routers = [
    new DefaultRouter(new DefaultController),
    new VideoRouter(new VideoController),
    new UserRouter(new UserController(commandBus))
]

const server = new Server(app, routers)

server.start()
