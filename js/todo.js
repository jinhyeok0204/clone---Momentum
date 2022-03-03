const toDoForm  = document.querySelector("form#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList  = document.querySelector("ul#todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos    = toDos.filter((item)=>item.id !== parseInt(li.id));
    saveToDos();
    li.remove();
}

function paintToDo(newToDoObj){
    const liTag     = document.createElement("li");
    const spanTag   = document.createElement("span");
    const buttonTag = document.createElement("button");

    liTag.id = newToDoObj.id;
    spanTag.  innerText = newToDoObj.text;
    buttonTag.innerText = "X";

    liTag.   appendChild(spanTag);
    liTag.   appendChild(buttonTag);
    toDoList.appendChild(liTag);

    buttonTag.addEventListener("click", deleteToDo);
}

function handleTodoSubmit(event){
    event.preventDefault();

    const newToDo = toDoInput.value;
    const newToDoObj = {
        text : newToDo,
        id : Date.now()
    }
    toDos.push(newToDoObj);
    toDoInput.value = "";

    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);
 
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach((item)=>paintToDo(item));
}
