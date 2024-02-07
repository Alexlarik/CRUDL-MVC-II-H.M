'use strict'

const STORAGE_KEY = 'booksDB'
var gBooks = loadFromStorage(STORAGE_KEY) || createBooks()

function createBooks() {
    const books = [
        { id: 'b101', title: 'Nosferatu', price: 120, imgUrl: '' },
        { id: 'b102', title: 'The Abyss', price: 80, imgUrl: '' },
        { id: 'b103', title: 'Odyssey', price: 100, imgUrl: '' }
    ]

    saveToStorage(STORAGE_KEY, books)
    return books

}

function getBooks() {
    return gBooks
}

function removeBook(bookId) {
    const idx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(idx, 1)
}

function addBook(title, price) {
    const toRead = {
        id: 'b' + Date.now() % 1000,
        title,
        price: price,
        imgUrl: ''
    }
    gBooks.unshift(toRead)
}

function updatePrice(bookId, newPrice) {
    const idx = gBooks.findIndex(book => book.id === bookId)

    return gBooks[idx].price = newPrice
}

function readBook(bookId) {
    const findBook = gBooks.find(book => book.id === bookId)
    return findBook

}
