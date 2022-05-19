
const h1 = document.getElementById('heading');
const input = document.querySelector('input');
const btn = document.querySelector('#btn');
const todoList = document.getElementById('todo-list');
const btnDel = document.querySelector('#btn-del');
const btnAdd = document.querySelector('#btn-add');

h1.classList.add('welcome');
h1.textContent = 'No welcome!';
input.style.backgroundColor = 'pink';

btn.addEventListener('click', function () {
    h1.textContent = input.value;
});

// Delete task
btnDel.onclick = function () {
    const task = document.querySelector('.task');
    console.log(task);
    todoList.removeChild(task);
};

// Add task
btnAdd.onclick = function () {
    let newTask = prompt('What is your task?');
    newTask = `<li class="task">${newTask}</li>`;
    todoList.insertAdjacentHTML('beforeend', newTask);
};






