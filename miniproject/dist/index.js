"use strict";
const button = document.getElementById('btn');
const inputElement = document.getElementById('input-element');
const form = document.querySelector('form');
const list = document.getElementById('ulListTodo');
const getTodos = () => {
    const todos = localStorage.getItem('todos');
    if (todos === null)
        return [];
    return JSON.parse(todos);
};
const todo = getTodos();
const saveTodo = () => localStorage.setItem('todos', JSON.stringify(todo));
const createListItem = (todo) => {
    const li = document.createElement('LI');
    li.append(todo.text);
    const checkBoxElement = document.createElement('input');
    checkBoxElement.type = 'checkbox';
    checkBoxElement.checked = todo.completed;
    checkBoxElement.addEventListener('change', () => {
        todo.completed = checkBoxElement.checked;
        saveTodo();
    });
    list === null || list === void 0 ? void 0 : list.append(li);
    list === null || list === void 0 ? void 0 : list.append(checkBoxElement);
};
todo.forEach(createListItem);
const handleSubmit = (event) => {
    event.preventDefault();
    const todoItem = {
        text: inputElement.value,
        completed: false,
    };
    todo.push(todoItem);
    createListItem(todoItem);
    inputElement.value = '';
};
form === null || form === void 0 ? void 0 : form.addEventListener('submit', handleSubmit);
// button?.addEventListener('click', () => {
//   alert(inputElement.value)
//   inputElement.value = ""
// })
