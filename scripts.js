//Input fields focus effect
// A classe irá pegas os inputs e fazer um foreach adicionando a classe 'active'
// no elemento pai desses inputs no click e depois irá remover inserindo um blur
const inputsText = document.querySelectorAll("input");

inputsText.forEach((textInput) => {
  textInput.addEventListener("focus", () => {
    let parent = textInput.parentNode;
    parent.classList.add("active");
  });

  textInput.addEventListener("blur", () => {
    let parent = textInput.parentNode;
    parent.classList.remove("active");
  });
});

//password show/ hide button
const passwordInput = document.querySelector(".form__password-input");
const eyeButton = document.querySelector(".eye-btn");

eyeButton.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeButton.innerHTML = "<i class='uil uil-eye'></i>";
  } else {
    passwordInput.type = "password";
    eyeButton.innerHTML = "<i class='uil uil-eye-slash'></i>";
  }
});

// Sliding between forms
const sigUpButton = document.querySelector(".signUp-btn");
const sigInButton = document.querySelector(".signIn-btn");
const sigInForm = document.querySelector(".sign-in__form");
const sigUpForm = document.querySelector(".sign-up__form");

sigUpButton.addEventListener("click", () => {
  sigInForm.classList.add("hide");
  sigUpForm.classList.add("show");
  sigInForm.classList.remove("show");
});

sigInButton.addEventListener("click", () => {
  sigInForm.classList.remove("hide");
  sigUpForm.classList.remove("show");
  sigInForm.classList.add("show");
});

// LOGIN RULES
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

//Check Inputs
function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = username.value;
  const confirmPasswordValue = username.value;

  if (usernameValue === "") {
    setErrorMessage(username, "Nome do usuário é obrigatório!");
  }
}

function setErrorMessage(input, message) {
  const formField = input.parentElement;
  const small = formField.querySelector("small");

  //   Add error message
  small.innerText = message;

  //   Add success message
  formField.className = "form__field error";
}

// LOGIN RULES
