// определяем элементы на странице
const year = document.querySelector('#year')
const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')


// устнаваливаем год на страницу
const currentYear = new Date().getFullYear()
year.innerText = currentYear

// настройки
const PARAMETR = {
    year: currentYear,
    month: 'Aprel',
    number: '01',
}
const {month, number} = PARAMETR
console.log(month)
// дата след. встречи
const nextVstr = new Date(`${month} ${number} ${currentYear} 00:00:00`)
function updateCounter() {
    const currentTime = new Date()
    const diff = nextVstr - currentTime
    
    // перевод в сек / мин / часы / дни
    const daysLeft = Math.floor(diff / 1000 / 60 /60 / 24)
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60
    const secondsLeft = Math.floor(diff / 1000) % 60
    
    console.log(daysLeft,hoursLeft,minutesLeft,secondsLeft)
    
    days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft
}
updateCounter()
setInterval(updateCounter,1000)


