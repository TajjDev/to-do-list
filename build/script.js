"use strict";
let taskinput = document.getElementById("task");
let btnsub = document.getElementById("btnsub");
let theTaskInput = document.querySelector("#theTaskInput");
let donne = document.getElementById('donne');
let taskArray = [];
function submit() {
    if (taskinput.value !== '') {
        taskArray.push(taskinput.value);
        taskinput.value = '';
        displayTask();
    }
}
const displayTask = () => {
    let content = "";
    for (let index = 0; index < taskArray.length; index++) {
        content += `<li>${taskArray[index]}<br><button onclick="editTask(${index})">Edit Task</button><button onclick=" deleteTask(${index})">Task Completed</button></l1>`;
    }
    theTaskInput.innerHTML = content;
};
const deleteTask = (index) => {
    taskArray.splice(index, 1);
    displayTask();
};
const editTask = (index) => {
    let a = prompt('ENTER A NEW NAME FOR YOUR TASK');
    if (a !== '') {
        taskArray.splice(index, 1, `${a}`);
        displayTask();
    }
};
