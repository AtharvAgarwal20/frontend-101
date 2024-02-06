const cardContainer = document.querySelector('#cardContainer')
const navContainer = document.querySelector('#navContainer')

let totalCards = prompt("Enter total number of cards (greater than 0)")
totalCards = parseInt(totalCards)
while (`${totalCards}` === 'NaN' || totalCards <= 0) {
    totalCards = prompt("Invalid input. Enter total number of cards (greater than 0)")
    totalCards = parseInt(totalCards)
}

let cardsPerPage = prompt("Enter the number of cards per page (greater than 0 and lesser than total cards)")
cardsPerPage = parseInt(cardsPerPage)
while (`${cardsPerPage}` === 'NaN' || cardsPerPage <= 0 || cardsPerPage > totalCards) {
    cardsPerPage = prompt("Invalid input. Enter the number of cards per page (greater than 0 and lesser than total cards)")
    cardsPerPage = parseInt(cardsPerPage)
}

const numberOfSets = Math.ceil(totalCards / cardsPerPage)

for (let i = 1; i <= numberOfSets; i++) {
    let navCircle = document.createElement('div')
    navCircle.classList.add('nav')
    navCircle.id = i
    navContainer.appendChild(navCircle)
}

for (let j = 1; j <= numberOfSets; j++) {
    let set = document.createElement('div')
    set.classList.add('cardSet')
    set.id = j
    cardContainer.appendChild(set)
}
const sets = document.querySelectorAll('.cardSet')

if (totalCards % cardsPerPage === 0) {
    let k = 1
    for (let set of sets) {
        for (let l = 1; l <= cardsPerPage; l++) {
            let newCard = document.createElement('div')
            newCard.innerText = k
            k++
            newCard.classList.add('card')
            if (cardsPerPage <= 4) {
                newCard.style.width = '20vw'
                newCard.style.height = '30vw'
            }
            else if (cardsPerPage > 4) {
                newCard.style.width = `${(80 - 84 / window.innerWidth) / cardsPerPage}vw`
                newCard.style.height = `${(120 - 126 / window.innerWidth) / cardsPerPage}vw`
            }
            set.appendChild(newCard)
        }
    }
}
else if (totalCards % cardsPerPage !== 0) {
    let k = 1
    for (let l = 0; l <= sets.length - 2; l++) {
        for (let m = 1; m <= cardsPerPage; m++) {
            let newCard = document.createElement('div')
            newCard.innerText = k
            k++
            newCard.classList.add('card')
            if (cardsPerPage <= 4) {
                newCard.style.width = '20vw'
                newCard.style.height = '30vw'
            }
            else if (cardsPerPage > 4) {
                newCard.style.width = `${(80 - 84 / window.innerWidth) / cardsPerPage}vw`
                newCard.style.height = `${(120 - 126 / window.innerWidth) / cardsPerPage}vw`
            }
            sets[l].appendChild(newCard)
        }
    }
    for (let n = 1; n <= totalCards % cardsPerPage; n++) {
        let endCard = document.createElement('div')
        endCard.innerText = k
        k++
        endCard.classList.add('card')
        if (cardsPerPage <= 4) {
            endCard.style.width = '20vw'
            endCard.style.height = '30vw'
        }
        else if (cardsPerPage > 4) {
            endCard.style.width = `${(80 - 84 / window.innerWidth) / cardsPerPage}vw`
            endCard.style.height = `${(120 - 126 / window.innerWidth) / cardsPerPage}vw`
        }
        sets[sets.length - 1].appendChild(endCard)
    }
}

let pageIndexer = 0
const navs = document.querySelectorAll('.nav')
for (let nav of navs) {
    nav.addEventListener('click', () => {
        cardContainer.style.transform = `translateX(-${(parseInt(nav.id) - 1) * window.innerWidth}px)`
        for (let nav2 of navs) {
            nav2.style.backgroundColor = 'transparent'
        }
        setTimeout(() => {
            nav.style.backgroundColor = '#F1F0EA'
        }, 750)
        pageIndexer = nav.id - 1
    })
}

function next() {
    if (pageIndexer === navs.length - 1) {
        pageIndexer = 0
    }
    else {
        pageIndexer++
    }
    cardContainer.style.transform = `translateX(-${pageIndexer * window.innerWidth}px)`
    for (let nav2 of navs) {
        nav2.style.backgroundColor = 'transparent'
    }
    setTimeout(() => {
        navs[pageIndexer].style.backgroundColor = '#F1F0EA'
    }, 750)
}
function prev() {
    if (pageIndexer === 0) {
        pageIndexer = navs.length - 1
    }
    else {
        pageIndexer--
    }
    cardContainer.style.transform = `translateX(-${pageIndexer * window.innerWidth}px)`
    for (let nav2 of navs) {
        nav2.style.backgroundColor = 'transparent'
    }
    setTimeout(() => {
        navs[pageIndexer].style.backgroundColor = '#F1F0EA'
    }, 750)
}

setInterval(next, 5000)

window.addEventListener('keyup', (e) => {
    if (e.code === "ArrowRight") {
        next()
    }
    else if (e.code === "ArrowLeft") {
        prev()
    }
})

window.addEventListener('resize', next)

const arrows = document.querySelectorAll('#arrowContainer svg')
arrows[0].addEventListener('click', prev)
arrows[1].addEventListener('click', next)
