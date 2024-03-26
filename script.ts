let taskinput = document.getElementById("task") as HTMLInputElement;
let btnsub = document.getElementById("btnsub") as  HTMLInputElement;
let theTaskInput = document.querySelector("#theTaskInput") as HTMLOListElement
let donne = document.getElementById('donne') as HTMLElement
let taskArray:string[] = []
function submit() {
    if (taskinput.value !== '') {
        taskArray.push(taskinput.value)
        taskinput.value == 'ddd'
        displayTask()
    }
}
const displayTask = ()=> {
    let content:string = ""
for (let index = 0; index < taskArray.length; index++) {
    content += `<li>${taskArray[index]}<br><button onclick="editTask(${index})">Edit Task</button><button onclick=" deleteTask(${index})">Task Completed</button></l1>`
}
    theTaskInput.innerHTML = content 
}

const deleteTask = (index:number):void=>{
    taskArray.splice(index,1)
    displayTask()
}

const editTask = (index:number):void=>{
    let a = prompt('ENTER A NEW NAME FOR YOUR TASK')
    if (a !== '') {
    taskArray.splice(index,1,`${a}`)
    displayTask()
    }
    
}
