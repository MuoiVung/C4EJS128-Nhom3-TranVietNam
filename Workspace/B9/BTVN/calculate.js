'use strict';

const app = function () {
    const time = parseInt(prompt('Nhập vào số giây: '));
    if (typeof time === 'number' && !isNaN(time)) {
        const hour = Math.floor(time / 3600);
        const minute = Math.floor((time % 3600) / 60);
        const second = time - hour * 3600 - minute * 60;
        console.log(`${time} giây = ${hour} giờ ${minute} phút ${second} giây`);
    }
};

app();