import { Books } from '../models/Book.js';

export class BookController {
    static getAllBooks = (req, res) => {
        Books.find().populate('author').then((books) => {
            res.status(200).json(books);
        }).catch((err) => {
            res.status(500).json({ error: err.message });
        });
    }

    static getBook = (req, res) => {
        Books.findById(req.params.id)
            .populate('author')
            .then(book => {
                if(!book){
                    res.status(404).send('Livro nao encontrado')
                } else {
                    res.status(200).json(book)
                }
            })
            .catch((err) => res.status(500).json({ error: err.message }));
    }

    static postBook = (req, res) => {
        const { title, author, publisher, pagesNumber } = req.body;

        const newBook = new Books({
            title,
            author,
            publisher,
            pagesNumber
        });

        newBook.save()
            .then(() => res.status(201).json({ message: 'Livro criado com sucesso' }))
            .catch((err) => res.status(500).json({ error: err.message }));
    }

    static putBook = (req, res) => {
        const bookUpdated = req.body
        const attBook = Books.findByIdAndUpdate(req.params.id, bookUpdated, { new: true })
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
        Books.findByIdAndDelete(req.params.id)
        .then(deletedBook => {
            if(!deletedBook){
                res.status(404).send('Livro nao encontrado');
            } else {
                res.status(200).send('Livro deleteado');
            }
        })
    }

    static getBookByPublisher = (req, res) => {
        const publisher = req.query.publisher
        Books.findOne({ publisher: publisher })
            .then(book => {
                if(!book){
                    res.status(404).send('livro não encontrado')
                } else {
                    res.status(200).json(book)
                }
            })
            .catch(err => res.status(500).json({error: err.message}))
    }
}