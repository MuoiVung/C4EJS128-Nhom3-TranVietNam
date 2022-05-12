'use strict';




/**
 * Nhập ngày, tháng, năm
 */

let day;
let month;
let year;
let isMonthValid = false;
let isDayValid = false;
let isYearValid = false;

let limitDay = 0;
let isLeapYear = false;
let nextDay;
let nextMonth;
let nextYear;

/**
 * 1. Kiểm tra tháng nhập vào là tháng nào? 
 * ( 30(4, 6, 9, 11) hay 31(1,3,5,7,8,10,12) va thang 2(28, 29 nhuan))
 * 2. Kiểm tra xem ngày hiện tại vượt quá ngày tối đa của tháng chưa?
 * 3. Nếu vượt quá thì tăng tháng lên 1.
 * 4. Kiểm tra tháng đã vượt quá chưa, nếu vượt quá thì tăng năm lên 1
 * 5. In ra ngày tháng năm tiếp theo
 */

// Nhập năm và kiểm tra năm theo lịch Gregorius, năm tính từ 1582
do {
    year = Number(prompt('Năm hợp lệ tính từ năm 1582 theo lịch Gregorius\nVui lòng nhập năm: '));
    year >= 1582 ? isYearValid = true : alert('Năm nhập vào không hợp lệ!\nVui lòng nhập lại năm!');
}
while (!isYearValid);

// Nhập tháng và kiểm tra tháng nhập vào
do {
    month = Number(prompt('Vui lòng nhập tháng: '));
    if (month >= 1 && month <= 12) {
        isMonthValid = true;
    }
    else {
        alert('Tháng không hợp lệ!\nVui lòng nhập lại tháng!');
    }
}
while (!isMonthValid);

// Tìm giới hạn ngày theo tháng nhập vào
switch (month) {
    // Tháng có 31 ngày
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        limitDay = 31;
        break;
    // Tháng có 30 ngày
    case 4:
    case 6:
    case 9:
    case 11:
        limitDay = 30;
        break;
    // Tháng 2:
    case 2:
        //Kiểm tra năm nhuận hay không nhuận
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            isLeapYear = true;
        }
        limitDay = isLeapYear ? 29 : 28;
        break;
}

// Nhập ngày và kiểm tra ngày nhập vào
do {
    day = Number(prompt('Vui lòng nhập ngày: '));

    if (day >= 1 && day <= limitDay) {
        isDayValid = true;
    }
    else {
        alert('Ngày nhập vào không hợp lệ!\nVui lòng nhập lại!');
    }
}
while (!isDayValid);

// Kiểm tra ngày hiện tại vượt quá ngày tối đa của tháng chưa?
if (day === limitDay) {
    nextDay = 1;
    if (month === 12) {
        nextMonth = 1;
        nextYear = year + 1;
    }
    else {
        nextMonth = month + 1;
        nextYear = year;
    }
}
else {
    nextDay = day + 1;
    nextMonth = month;
    nextYear = year;
}

console.log(`Today is ${year}/${month}/${day}`);
console.log(`The next day is ${nextYear}/${nextMonth}/${nextDay}`);

alert(`Today is ${year}/${month}/${day}
The next day is ${nextYear}/${nextMonth}/${nextDay}`);

// Test cases:
/**
 * Error cases:
 * 1. Nhập năm < 1582 => nhập lại năm!
 * 1. Nhập tháng < 1 || > 12 => nhập lại tháng!
 * 2. Nếu tháng 1, 3, 5, 7, 8, 12: d < 1 || d > 31 => nhập lại ngày!
 * 3. Nếu tháng 4, 6, 9, 11: d < 1 || d > 30 => nhập lại ngày!
 * 4. Nếu tháng 2 năm nhuận: d < 1 || d > 29 => nhập lại ngày!
 * 5. Nếu tháng 2 năm không nhuận: d < 1 || d > 28 => nhập lại ngày!
 * 
 * Normal cases:
 * 1. Ngày bt: 05/04/2022 => 06/04/2022
 * 2. Ngày cuối tháng 30 ngày: 30/04/2022 => 01/05/2022
 * 3. Ngày cuối tháng 31 ngày: 31/05/2022 => 01/06/2022
 * 4. Ngày cuối tháng 2 năm không nhuận: 28/02/2022 => 01/03/2022
 * 5. Ngày cuối tháng 2 năm nhuận: 28/02/2016 => 29/02/2016 và 29/02/2016 => 01/03/2016
 * 6. Tháng cuối năm: 31/12/2022 => 01/01/2023
 */
