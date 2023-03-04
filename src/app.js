import express from 'express'

export const app = express()

const rotas = {
    '/': 'Você esta navegando na home',
    '/livros': 'Livros Malbek',
    '/videos': 'Funnt videos forverr'
}

app.get('/', (req, res) => {
    res.status(200).send(rotas[req.url])
})

app.get('/livros', (req, res) => {
    res.status(200).send(rotas[req.url])
})

app.get('/videos', (req, res) => {
    res.status(200).send(rotas[req.url])
})
