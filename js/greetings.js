const loginForm  = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting   = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY ="username"; 

function onLoginSubmit(event){  
    event.preventDefault()
    loginForm.classList.add(HIDDEN_CLASS)
    
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}


function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText = `Hello ${username}`;

}
const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){ 
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreetings(savedUserName);
}



