'use strict'

const $ = document

const sun = $.querySelector('.sun')
const moon = $.querySelector('.moon')
const logo = $.querySelector ('.bigLogo')
const city = $.querySelector('.containerCity')
const textContent = $.querySelector('.textContent')
const text = $.querySelector('.text')
const itemMenu = $.querySelectorAll('a')

const sunClick = () => {  //****** for being night */

    sun.classList.remove('moonMove')
    moon.classList.remove('sunMove')
    sun.className += ' '+'sunMove'
    moon.className += ' '+'moonMove'

    $.body.style.background = '#041536'

    city.style.background = 'url(./assets/img/city_in_the_night.png)'
    city.style.backgroundSize = 'cover'
    city.style.backgroundPosition = 'center'
    city.style.backgroundRepeat = 'no-repeat'

    textContent.style.color = 'whitesmoke'
    logo.style.color = 'whitesmoke'
    text.style.color = 'whitesmoke'

    itemMenu.forEach((Case) => {
        Case.style.color = 'whitesmoke'
    })
}

const moonClick = () => {   //****** for being day */

    sun.classList.remove('sunMove')
    moon.classList.remove('moonMove')
    sun.className += ' '+'moonMove'
    moon.className += ' '+'sunMove'

    $.body.style.background = 'whitesmoke'

    city.style.background = 'url(./assets/img/city_in_the_day.png)'
    city.style.backgroundSize = 'cover'
    city.style.backgroundPosition = 'center'
    city.style.backgroundRepeat = 'no-repeat'

    textContent.style.color = 'black'
    logo.style.color = 'black'
    text.style.color = 'black'

    itemMenu.forEach((Case) => {
        Case.style.color = 'black'
    })
}

sun.addEventListener('click' , () => {

    sunClick()
    localStorage.setItem('state' , 'night')
})

moon.addEventListener('click' , () => {

    moonClick()
    localStorage.setItem('state' , 'day')
})

window.addEventListener('load' , () => {
    let state = localStorage.getItem('state')
    if(state == 'day') {
        moonClick()
    }else{
        sunClick()
    }
})