import express from 'express'
import DIContainer from './IOC/DIContainer'

const container = new DIContainer(express())

container.Server.start()
