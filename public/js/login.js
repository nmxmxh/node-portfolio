const loginEmailLabel = document.querySelector('.login-email-address');
const loginEmailInput = document.querySelector('.login-email-input');

const loginPasswordLabel = document.querySelector('.login-password');
const loginPasswordInput = document.querySelector('.login-password-input');

function keyupInputHandler() {

    if (loginEmailInput.value === "") {
        loginEmailLabel.classList.remove("active")
        loginEmailLabel.classList.remove("highlight")
    } else {
        loginEmailLabel.classList.add("active")
        loginEmailLabel.classList.add("highlight")
    }

    if (loginPasswordInput.value === "") {
        loginPasswordLabel.classList.remove("active")
        loginPasswordLabel.classList.remove("highlight")
    } else {
        loginPasswordLabel.classList.add("active")
        loginPasswordLabel.classList.add("highlight")
    }
}

function blurInputHandler() {

    if(loginEmailInput.value === "") {
        loginEmailLabel.classList.remove("active")
        loginEmailLabel.classList.remove("highlight")
    } else {
        loginEmailLabel.classList.remove("highlight")
    }

    if(loginPasswordInput.value === "") {
        loginPasswordLabel.classList.remove("active")
        loginPasswordLabel.classList.remove("highlight")
    } else {
        loginPasswordLabel.classList.remove("highlight")
    }
}

function focusInputHandler() {

    if(loginEmailInput.value === "") {
        loginEmailLabel.classList.remove("highlight")
    } else if(firstNameInput.value !== ""){
        loginEmailLabel.classList.add("highlight")
    }

    if(loginPasswordInput.value === "") {
        loginPasswordLabel.classList.remove("highlight")
    } else if(firstNameInput.value !== ""){
        loginPasswordLabel.classList.add("highlight")
    }
}

loginEmailInput.addEventListener("keyup", keyupInputHandler)
loginPasswordInput.addEventListener("keyup", keyupInputHandler)

loginEmailInput.addEventListener("blur", blurInputHandler)
loginPasswordInput.addEventListener("blur", blurInputHandler)

loginEmailInput.addEventListener("focus", focusInputHandler)
loginPasswordInput.addEventListener("focus", focusInputHandler)