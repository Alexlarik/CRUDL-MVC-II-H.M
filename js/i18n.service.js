'use strict'


const gTrans = {
    'title-header': {
        en: 'CRUDL: Book Shop',
        he: 'CRUDL : חנות ספרים'
    },
    'add-txt-placeholder': {
        en: 'Add a new book!',
        he: 'תוסיף ספר חדש'
    },
    'add': {
        en: 'Add',
        he: 'תוסיף'
    },
    'Search': {
        en: 'Search',
        he: 'תחפש'
    },
    'select-sorting': {
        en: 'Select Sorting',
        he: 'תבחר סידור'
    },
    'sort-price': {
        en: 'Price',
        he: 'מחיר'
    },
    'sort-rating': {
        en: 'Rating',
        he: 'דרגה'
    },
    'descend-check-box': {
        en: 'Descending',
        he: 'סדר יורד'
    },
    'next-page': {
        en: 'Next Page',
        he: 'עמוד הבא'
    },
    'total-books': {
        en: 'Total Books',
        he: 'סהכ ספרים'
    }, 'title': {
        en: 'Title',
        he: 'שם'
    },
    'price': {
        en: 'Price',
        he: 'מחיר'
    },
    'rating': {
        en: 'Rating',
        he: 'דירוג'
    },
    'actions': {
        en: 'Actions',
        he: 'פעולות'
    },
    'read': {
        en: 'Read',
        he: 'לקרוא'
    },
    'update': {
        en: 'Update',
        he: 'שינוי'
    },
    'delete': {
        en: 'Delete',
        he: 'מחיקה'
    }




}

var gCurrLang = 'en'

function getTrans(transKey) {


    const transMap = gTrans[transKey]

    if (!transMap) return 'UNKNOWN'
    let transTxt = transMap[gCurrLang]

    if (!transTxt) transTxt = transMap.en
    return transTxt
}

function doTrans() {

    const els = document.querySelectorAll('[data-trans]')
    els.forEach(el => {

        const transKey = el.dataset.trans
        console.log('transKey:', transKey)
        const transTxt = getTrans(transKey)
        console.log('transTxt:', transTxt)

        if (el.placeholder) el.placeholder = transTxt
        else el.innerText = transTxt
    })
}

function setLang(lang) {
    gCurrLang = lang
}
