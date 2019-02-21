const toDoArray = [];
const form=document.querySelector('form');
const ul=document.querySelector('ul');
const taskCount=document.querySelector('h1 span');
const listItems=document.getElementsByClassName('task');
const input=document.querySelector('.add-task');

// removeTask - function that removes li item from list and task item from array, also counting tasks and create new list

const removeTask=(e)=>{ 
    e.target.parentNode.remove(); //removing task from ul list
    const index=e.target.parentNode.dataset.key;
    toDoArray.splice(index, 1) //removing task from array
    console.log(toDoArray);
    taskCount.textContent=listItems.length; //counting tasks
    renderList();
}

// addTask - function that adds task to list and array

const addTask=(e)=>{
    e.preventDefault()
    const titleTask=input.value;
    if(titleTask==="") return; //checking if user enter any value
    const task=document.createElement('li'); //creating new task item as li element
    task.className='task';
    task.innerHTML=titleTask+"<button>delete</button>";
    toDoArray.push(task) // adding new task to array
    renderList()
    ul.appendChild(task); // adding new task to ul
    input.value=""; //clearing input field
    taskCount.textContent=listItems.length; //counting tasks
    task.querySelector('button').addEventListener('click', removeTask);
}

const renderList=()=>{
    ul.textContent="";
    toDoArray.forEach((toDoElement, key)=>{
        toDoElement.dataset.key=key;
        ul.appendChild(toDoElement);
    })
}

form.addEventListener('submit', addTask)