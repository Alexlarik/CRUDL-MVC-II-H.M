'use strict'

const gOptions = {
    filterBy: {},
    sortBy: {}

}

function onInit() {
    _createBooks()
    renderBooks()
}

function renderBooks() {
    const elBooks = document.querySelector('.tbody')
    const books = getBooks(gOptions)
    const strHTMLs =
        books.map(book =>
            `<tr class="table-row"> 
            <td>${book.title}</td>
            <td>${book.price}</td>
            <td>${book.rating}</td>
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
    saveBooks()
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
    saveBooks()
    renderBooks()

}

function onReadBook(bookId) {
    console.log(bookId)
    const elModal = document.querySelector('.book-details')
    const elTXT = elModal.querySelector('h2 span')
    const elPRE = document.querySelector('pre')
    const elImg = elModal.querySelector('div img')

    const book = readBook(bookId)
    const bookSTR = JSON.stringify(book, null, 4)
    elTXT.innerText = book.title
    elPRE.innerText = bookSTR
    elImg.src = `img/${book.title}.jpg`
    elModal.showModal()
}

function onSetFilterBy() {
    const elOption = document.querySelector('.filter-by input')

    gOptions.filterBy.text = elOption.value
    console.log(gOptions.filterBy)
    renderBooks()

}

function onSetSortBy() {
    const elSortBy = document.querySelector('.sort-by select')
    const elDir = document.querySelector('.sort-by input')

    const dir = elDir.checked ? -1 : 1
    const sortBy = elSortBy.value

    if (sortBy === 'price') {
        gOptions.sortBy = { price: dir }
    } else if (sortBy === 'rating') {
        gOptions.sortBy = { rating: dir }
    }
    // gOptions.sortBy = {}
    renderBooks()
}
