import { Author } from '../models/Author.js';

export class AuthorController {
    static getAllAuthors = (req, res) => {
        Author.find()
            .then((authors) => res.status(200).json(authors))
            .catch((err) => res.status(500).json({ error: err.message }));
    }

    static getAuthor = (req, res) => {
        Author.findById(req.params.id)
            .then(author => {
                if(!author){
                    res.status(404).send('Autor nao encontrado')
                } else {
                    res.status(200).json(author)
                }
            })
    }

    static postAuthor = (req, res) => {
        const { name, nacionality } = req.body;

        const newAuthor = new Author({
            name,
            nacionality
        });

        newAuthor.save()
            .then(() => res.status(201).json({ message: 'Autor criado com sucesso' }))
            .catch((err) => res.status(500).json({ error: err.message }));
    }

    static putAuthor = (req, res) => {
        const authorUpdated = req.body
        const attAuthor = Author.findByIdAndUpdate(req.params.id, authorUpdated, { new: true })
        attAuthor
            .then(newAuthor => {
                if (!newAuthor) {
                    res.status(404).send('Autor nao encontrado')
                } else {
                    res.status(200).json(newAuthor);
                }
            })
            .catch((err) => res.status(500).json({ error: err.message }));
    }

    static deleteAuthor = (req, res) => {
        Author.findByIdAndDelete(req.params.id)
        .then(deletedAuthor => {
            if(!deletedAuthor){
                res.status(404).send('Autor nao encontrado');
            } else {
                res.status(200).send('Autor deleteado');
            }
        })
    }
}