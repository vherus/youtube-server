import express from 'express'
import cors from 'cors'
import { PORT } from './Config/Config'
import Server from './Core/Server'
import DefaultRouter from './Routing/DefaultRouter'
import DefaultController from './Controllers/DefaultController'
import VideoRouter from './Routing/Video/VideoRouter'
import VideoController from './Controllers/Video/VideoController'

const app = express()

app.use(cors({
    origin: `http://localhost:${PORT}`
}))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const routers = [
    new DefaultRouter(app, new DefaultController),
    new VideoRouter(app, new VideoController)
]

const server = new Server(app, routers)

server.start()
