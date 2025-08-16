const inputField = document.getElementById('todo-input');
const todoList = document.getElementById('to-do-list');
const submitButton = document.querySelector('button[type="submit"]');

function addTask(){
    if(inputField.value === ''){
        alert('You must enter a task.')
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputField.value;
        todoList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputField.value = '';
    storeData();
}

submitButton.addEventListener('click',()=>{
    addTask()
});

todoList.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        storeData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        storeData();
    }
})

function storeData(){
    localStorage.setItem('data', todoList.innerHTML);
}

function showTasks(){
    todoList.innerHTML = localStorage.getItem('data');
}
showTasks();