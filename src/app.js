import express from 'express'

import db from './config/DbConnect.js'
import routes from './routes/index.js'

db.on('error', err => console.log('connection error!', err)) //Caso a conex'ao com Atlas falhe
db.once('open', () => console.log('conexão feita com sucesso!')) //Caso a conex'ao com Atlas seja sucedida

export const app = express()

app.use(express.json());

app.use('/', routes)