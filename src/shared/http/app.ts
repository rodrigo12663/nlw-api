import express from 'express'
import 'reflect-metadata'
import 'express-async-errors'
import cors from 'cors'
import routes from './routes'
import createConnection from '../typeorm'
import ConfigError from '../middlewares/ConfigError'


createConnection ();
const configErro = new ConfigError()
const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)
app.use(configErro.execute)

export default app;