'use strict'

var gBooks
const STORAGE_KEY = 'booksDB'

function _createBook(title, price, rating = Math.floor(Math.random() * 6), img = 'empty-image') {
    const book = {
        id: makeId(),
        title: title,
        price: price,
        rating: rating,
        img: img
    }
    return book

}

function makeId(length = 6) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var id = ''

    for (var i = 0; i < length; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return id
}

function _createBooks() {
    gBooks = loadFromStorage(STORAGE_KEY)
    if (!gBooks || !gBooks.length) {
        gBooks = [
            _createBook('Nosferatu', 120, 5, 'img/nosferatu.jpg'),
            _createBook('The Abyss', 80, 3, 'img/abyss.jpg'),
            _createBook('Odyssey', 100, 4, 'img/odyssey.jpg')
        ]
    }
    saveBooks()

}

function saveBooks() {
    saveToStorage(STORAGE_KEY, gBooks)
}


function getBooks(options) {
    var books = gBooks

    if (options.filterBy.text) {
        const txt = options.filterBy.text.toLowerCase()
        books = gBooks.filter(book => book.title.toLowerCase().includes(txt))
    }
    if (options.sortBy.price) {
        books.sort((book1, book2) => (book1.price - book2.price) * options.sortBy.price)
    }

    if (options.sortBy.rating) {
        books.sort((book1, book2) => (book1.rating - book2.rating) * options.sortBy.rating)
    }
    return books
}

function removeBook(bookId) {
    const idx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(idx, 1)
}

function addBook(title, price, rating) {
    gBooks.unshift(_createBook(title, price, rating))

    saveBooks()

}

function updatePrice(bookId, newPrice) {
    const idx = gBooks.findIndex(book => book.id === bookId)

    return gBooks[idx].price = newPrice
}

function readBook(bookId) {
    const findBook = gBooks.find(book => book.id === bookId)
    return findBook

}

function getBooksCount() {
    const elTotal = document.querySelector('.total-books')
    const books = gBooks.length
    const strHTML = `<div>Total Books: ${books}</div>
`

    elTotal.innerHTML = strHTML
    renderBooks()
    return books

}
