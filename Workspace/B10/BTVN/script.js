'use strict';

const clockDateEl = document.querySelector('#date .clock-content');
const clockHourEl = document.querySelector('#hour .clock-content');
const clockMinuteEl = document.querySelector('#minute .clock-content');
const clockSecondEl = document.querySelector('#second .clock-content');

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

setInterval(function () {
    const now = new Date();
    const nowDay = days[now.getDay()];
    const nowHour = now.getHours();
    const nowMinute = now.getMinutes();
    const nowSecond = now.getSeconds();

    clockDateEl.innerHTML = nowDay;
    clockHourEl.innerHTML = nowHour < 10 ? '0' + nowHour : nowHour;
    clockMinuteEl.innerHTML = nowMinute < 10 ? '0' + nowMinute : nowMinute;
    clockSecondEl.innerHTML = nowSecond < 10 ? '0' + nowSecond : nowSecond;
}, 1000);