import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { routes } from './routes/routes'
import 'express-async-errors'
import '../infra/orm/connection'

const app = express();

app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(process.env.PORT || 3000, () => console.log("Server started on port 3000!"));