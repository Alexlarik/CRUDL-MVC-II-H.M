'use strict'

var gBooks
const STORAGE_KEY = 'booksDB'

function _createBook(title, price, rating = Math.floor(Math.random() * 6), img) {
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
            _createBook('Nosferatu', 120, 3, 'imgUrl'),
            _createBook('The Abyss', 100, 3, 'imgUrl'),
            _createBook('Odyssey', 80, 3, 'imgUrl')
        ]
    }
    saveBooks()

}

function saveBooks() {
    saveToStorage(STORAGE_KEY, gBooks)
}


function getBooks() {
    return gBooks
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
// const toRead = {
//     id: 'b' + Date.now() % 1000,
//     title,
//     price: price,
//     imgUrl: ''