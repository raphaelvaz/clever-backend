import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { routes } from './routes/routes'

import '../infra/orm/connection'

const app = express();

app.use(cors())
app.use(express.json())

app.use(routes)