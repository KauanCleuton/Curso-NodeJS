import express from 'express'
import CreateCouseService from './routes'

const app = express()

app.get('/', CreateCouseService)
app.listen(3333)
