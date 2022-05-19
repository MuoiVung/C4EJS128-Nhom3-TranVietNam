'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const result = $('.result');
const keyboard = $('#keyboard');
const btns = $$('.btn');
const num1 = $('.num-1');
const num2 = $('.num-2');
const symbol = $('.symbol');
const equal = $('.equal');

let isNum2 = false;
let finishCalc = false;

const calculate = function (symbol, num1, num2) {
    const value1 = Number.parseFloat(num1);
    const value2 = Number.parseFloat(num2);
    let result;

    switch (symbol) {
        case '+':
            result = value1 + value2;
            break;
        case '−':
            result = value1 - value2;
            break;
        case '×':
            result = value1 * value2;
            break;
        case '/':
            result = (value1 / value2).toFixed(10);
            break;
        case '%':
            result = value1 % value2;
            break;
    }
    return result;
};

const resetAll = function () {
    num1.innerHTML = '';
    num2.innerHTML = '';
    symbol.innerHTML = '';
    result.innerHTML = '';
    equal.innerHTML = '';
    isNum2 = false;
    finishCalc = false;
};

keyboard.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn')) {
        const value = e.target.innerHTML;
        console.log(value);
        switch (value) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (finishCalc) resetAll();
                if (isNum2 && num2.innerHTML === '') {
                    result.innerHTML = value;
                    num2.innerHTML = value;
                }
                else if (result.innerHTML === '0') result.innerHTML = value;
                else {
                    result.innerHTML += value;
                    if (isNum2) {
                        num2.innerHTML += value;
                    }
                }
                break;
            case '0':
                if (result.innerHTML !== '0') {
                    result.innerHTML += value;
                }
                break;
            case '+':
            case '−': //-
            case '×': //x
            case '/':
            case '%':
                if (result.innerHTML === '') return;
                // if (num1.innerHTML !== '' && num2.innerHTML !== '') return;
                if (finishCalc) {
                    equal.innerHTML = '';
                    num2.innerHTML = '';
                    finishCalc = false;
                }
                if (!isNum2) {
                    num1.innerHTML = result.innerHTML;
                    symbol.innerHTML = value;
                    isNum2 = true;
                }
                break;
            case '=':
                result.innerHTML = calculate(symbol.innerHTML, num1.innerHTML, num2.innerHTML);
                finishCalc = true;
                isNum2 = false;
                equal.innerHTML = '=';
                break;
            case 'AC':
                resetAll();
                break;
        }
    }
});