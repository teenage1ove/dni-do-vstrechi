alert('Зайка, не грусти пожалуйста. Мы еще увидимся, а щас я делаю отсчет до нашей следующей встречи<3')



//делаем рассчеты


const currentYear = new Date().getFullYear()

const PARAMETR = {
    year: currentYear,
    month: 'Jan',
    number: '10',
}
const currentTime = new Date()
const nextVstr = new Date(`${PARAMETR.month} ${PARAMETR.number} ${currentYear} 00:00:00`)

const diff = nextVstr - currentTime

// перевод в сек / мин / часы / дни
const daysLeft = Math.floor(diff / 1000 / 60 /60 / 24)
const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24
const minutesLeft = Math.floor(diff / 1000 / 60) % 60
const secondsLeft = Math.floor(diff / 1000) % 60

console.log(daysLeft,hoursLeft,minutesLeft,secondsLeft)