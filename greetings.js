const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-input");
const loginButton = document.getElementById("login-button");
const todoForm = document.getElementById("todo");
const greeting = document.getElementById("greeting");
const savedName = localStorage.getItem("username");
const USERNAME_KEY = "username";
const HIDDENCLASS = "hidden";

function onLoginSubmit(event) {
  const username = loginInput.value;
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDENCLASS);
  paintGreeting(username);
}

function logOut(event) {
  event.preventDefault();
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem("todos");
  location.reload();
}

function paintGreeting(username) {
  let welcomeMsg = document.createElement("h1");
  let logout = document.createElement("button");
  greeting.appendChild(welcomeMsg);
  greeting.appendChild(logout);
  welcomeMsg.innerText = `${username}! 멋진 이름이야! 반가워~`;
  logout.innerText = "이름 변경";
  logout.addEventListener("click", logOut);
  greeting.classList.remove(HIDDENCLASS);
  todoForm.classList.remove(HIDDENCLASS);
}

if (savedName === null) {
  loginForm.classList.remove(HIDDENCLASS);
  todoForm.classList.add(HIDDENCLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedName);
}
