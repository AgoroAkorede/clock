setInterval(setClock, 1000)
setInterval(setDigitalClock, 1000)

const hourHand = document.querySelector(' .clock .hand.hour');
const minuteHand = document.querySelector('.clock .hand.minute');
const secondHand = document.querySelector('.clock .hand.second');
const slider = document.querySelector('.slider');
const slide = document.querySelector('.slider .slide');

const clock = document.getElementById('clock')
const clockAnalogue =document.getElementById('clock-analogue')


function setRotation(element, rotationRatio) {
    element.style.webkitTransform = `rotate(${rotationRatio * 360}deg)`;  
    element.style.mozTransform = `rotate(${rotationRatio * 360}deg)`;  
    element.style.msTransform = `rotate(${rotationRatio * 360}deg)`;  
    element.style.oTransform = `rotate(${rotationRatio * 360}deg)`;
    element.style.transform = `rotate(${rotationRatio * 360}deg)`;  
    // console.log(element , rotationRatio)
    
}

slider.addEventListener('click',function () {
    // this.style.backgroundColor = 'black';
    slide.classList.toggle("slide-move");
    slide.classList.toggle("slide");
    setDigitalClock()
    clock.classList.toggle('hidden')
    clockAnalogue.classList.toggle('hidden')
   
})
function setDigitalClock() {
    let time = new Date();
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    amToPm = "AM";

    // if (hours > 12) {
        
    // }

    // console.log(hoursRatio);
    if (hours > 12){
        hours -= 12
        amToPm="PM"
    }
    if(hours == 0){
        hours = 12
        amToPm="PM"
    }

    if (hours < 10) {
        hours =`0${hours}`
    }
    if (minutes < 10) {
        minutes =`0${minutes}`
    }
    if (seconds < 10) {
        seconds =`0${seconds}`
    }
    clock.innerText = `${hours}:${minutes}:${seconds} ${amToPm}`
    

}

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio  +currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio  +currentDate.getHours()) / 12;

    // console.log(hoursRatio);
  
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio);

}

setClock();