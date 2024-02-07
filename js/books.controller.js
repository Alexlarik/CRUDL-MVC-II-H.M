'use strict'

function onInit() {
    renderBooks()
}

function renderBooks() {
    const elBooks = document.querySelector('.book-list')
    const books = getBooks()
    const strHTMLs = `
    <tr>
        <th class="header">Title</th>
        <th class="header">Price</th>
        <th class="header">Actions</th>
    </tr>
    ` + books.map(book => `
    <tr class="table-row">
        <td>${book.title}</td>
        <td>${book.price}</td>
        <td class="actions">
        <button class="read" onClick="onReadBook('${book.id}')">Read</button>
        <button class="update" onClick="onUpdateBook('${book.id}')">Update</button>
        <button  class="delete" onclick="onRemoveBook(event,'${book.id}')">Delete</button>
        </td>
    </tr>
    `).join('')
    elBooks.innerHTML = strHTMLs
}

function onRemoveBook(ev, bookId) {
    ev.stopPropagation()
    console.log('Book Id: X ', bookId)
    removeBook(bookId)
    renderBooks()
}

function onAddBook() {

    const elInput = document.querySelector('.new-book input')
    var price = +prompt('Enter a Price: ')
    addBook(elInput.value, price)
    elInput.value = ''
    renderBooks()
}

function onUpdateBook(bookId) {
    console.log(bookId)
    var newPrice = +prompt('Enter a new Price: ')
    updatePrice(bookId, newPrice)
    renderBooks()

}

function onReadBook(bookId) {
    console.log(bookId)
    const elModal = document.querySelector('.book-details')
    const elTXT = elModal.querySelector('h2 span')
    const elPRE = document.querySelector('pre')

    const book = readBook(bookId)
    const bookSTR = JSON.stringify(book, null, 4)
    elTXT.innerText = book.title
    elPRE.innerText = bookSTR
    elModal.showModal()
}
