import express from 'express'
import cors from 'cors'
import { routes } from './routes/routes'

const app = express();

app.use(cors())
app.use(express.json())

app.use(routes)

import { db } from '../infra/db/sqlite/connection'

db.sync(
    //{ force: true }
).then(result => {
    app.listen(3000, () => {
        console.log("Listening at 3000")
    })
}).catch(error => {
    console.log(error)
})