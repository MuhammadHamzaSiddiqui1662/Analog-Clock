const hoursHand = document.querySelector('.hours-hand');
const minutesHand = document.querySelector('.minutes-hand');
const secondsHand = document.querySelector('.seconds-hand');
const millisecondsHand = document.querySelector('.milliseconds-hand');
let currentTime;

setInterval(() => {
    currentTime = new Date;
    millisecondsHand.style.transform = 'rotate('+((currentTime.getMilliseconds()/(1000/360))-90)+'deg)';
    secondsHand.style.transform = 'rotate('+((currentTime.getSeconds()*6)-90)+'deg)';
    minutesHand.style.transform = 'rotate('+((currentTime.getMinutes()*6)-90)+'deg)';
    hoursHand.style.transform = 'rotate('+((currentTime.getHours()*30)-90)+'deg)';
    console.log(currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
}, 1);

console.log(hoursHand);