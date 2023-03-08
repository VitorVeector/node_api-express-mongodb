import { books } from '../models/Book.js';

export class BookController {
    static getAllBooks = (req, res) => {
        books.find()
            .then((books) => res.status(200).json(books))
            .catch((err) => res.status(500).json({ error: err.message }));
    }

    static getBook = (req, res) => {
        books.findById(req.params.id)
            .then(book => {
                if(!book){
                    res.status(404).send('Livro nao encontrado')
                } else {
                    res.status(200).json(book)
                }
            })
    }

    static postBook = (req, res) => {
        const { title, author, description } = req.body;

        const newBook = new books({
            title,
            author,
            description
        });

        newBook.save()
            .then(() => res.status(201).json({ message: 'Livro criado com sucesso' }))
            .catch((err) => res.status(500).json({ error: err.message }));
    }

    static putBook = (req, res) => {
        const bookUpdated = req.body
        const attBook = books.findByIdAndUpdate(req.params.id, bookUpdated, { new: true })
        attBook
            .then(newBook => {
                if (!newBook) {
                    res.status(404).send('Livro nao encontrado')
                } else {
                    res.status(200).json(newBook);
                }
            })
            .catch((err) => res.status(500).json({ error: err.message }));
    }

    static deleteBook = (req, res) => {
        books.findByIdAndDelete(req.params.id)
        .then(deletedBook => {
            if(!deletedBook){
                res.status(404).send('Livro nao encontrado');
            } else {
                res.status(200).send('Livro deleteado com sucesso');
            }
        })
    }
}