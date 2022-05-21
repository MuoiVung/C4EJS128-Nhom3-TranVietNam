function init() {
    const nope = document.getElementById("nope");
    const button = document.getElementById("change-my-life");
    const paragraph = document.getElementById("status");

    // Code ở đây
    // 1.
    button.addEventListener('click', () => {
        paragraph.innerHTML = 'The way to get started is to quit talking and begin doing.';
    });

    // 2.
    nope.addEventListener('mouseover', () => {
        nope.style.backgroundColor = '#ff0000';
        nope.style.color = '#ffffff';
    });

    // 3.
    nope.addEventListener('mouseout', () => {
        nope.style.backgroundColor = '';
        nope.style.color = '';
    });

    // 4.
    nope.addEventListener('click', () => {
        alert('Are you sure?');
        nope.innerHTML = 'Poor you';
    });

}

window.addEventListener("load", init);
// load Event là

//////////////////////////////////
// Form
const username = document.querySelector('.username');
const password = document.querySelector('.password');
const btnLogin = document.querySelector('.login');
const notice = document.querySelector('.notice');
const form = document.querySelector('#form');


function validate(event) {
    if (password.value.length < 9) {
        notice.textContent = 'Password is invalid!';
        event.preventDefault();
    }
}

form.addEventListener('submit', validate);


