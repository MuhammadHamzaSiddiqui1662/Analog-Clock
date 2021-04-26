const hoursHand = document.querySelector('.hours-hand');
const minutesHand = document.querySelector('.minutes-hand');
const secondsHand = document.querySelector('.seconds-hand');
const millisecondsHand = document.querySelector('.milliseconds-hand');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
let currentTime;
var sound = new Audio('./audios/tick.mp3');

setInterval(() => {
    currentTime = new Date;
    hoursHand.style.transform = 'rotate('+((currentTime.getHours()*30)+(currentTime.getMinutes()/2)-90)+'deg)';
    minutesHand.style.transform = 'rotate('+((currentTime.getMinutes()*6)-90)+'deg)';
    secondsHand.style.transform = 'rotate('+((currentTime.getSeconds()*6)-90)+'deg)';
    millisecondsHand.style.transform = 'rotate('+((currentTime.getMilliseconds()/(1000/360))-90)+'deg)';
    hours.innerHTML= currentTime.getHours();
    minutes.innerHTML=currentTime.getMinutes();
    sound.play();
}, 10);
