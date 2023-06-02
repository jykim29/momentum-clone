const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  let wholeText = event.target.parentElement.innerText;
  let text = wholeText.slice(0, wholeText.length - 1);
  let idx = toDos.indexOf(text);
  toDos.splice(idx, 1);
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  let liLength = document.querySelectorAll("li").length;
  if (liLength < 5) {
    span.innerText = newTodo;
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    saveToDos();
  } else {
    return alert("최대 5개까지 추가할 수 있어!");
  }
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

if (savedToDos !== null) {
  let parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
