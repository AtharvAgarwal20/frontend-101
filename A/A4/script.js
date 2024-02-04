const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const circle = document.querySelector('circle')
const hamburger = document.querySelector('#hamburger')

hamburger.addEventListener('mouseenter', () => {
    line1.classList.add('line1Hover')
    line2.classList.add('line2Hover')
    line3.classList.add('line3Hover')
    line1.classList.remove('line1Unhover')
    line2.classList.remove('line2Unhover')
    line3.classList.remove('line3Unhover')
})

hamburger.addEventListener('mouseleave', () => {
    setTimeout(() => {
        line1.classList.add('line1Unhover')
        line3.classList.add('line3Unhover')
        line1.classList.remove('line1Hover')
        line3.classList.remove('line3Hover')
        line2.classList.add('line2Unhover')
        line2.classList.remove('line2Hover')
    }, 250)
})