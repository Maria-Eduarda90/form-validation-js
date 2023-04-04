const inputName = document.querySelector(".name");
const inputPassword = document.querySelector(".password");
const inputEmail = document.querySelector(".email");
const inputs = document.querySelectorAll('form .input');
const labels = document.querySelectorAll('form label')
const button = document.querySelector('button');

inputName.addEventListener("input", (e) => {
  if (inputName.value.length < 5) {
    inputName.style.border = "1px solid red";
  } else {
    inputName.style.border = "1px solid #77ed53";
  }
});

inputPassword.addEventListener("input", (e) => {
  if (inputPassword.value.length < 8) {
    inputPassword.style.border = "1px solid red";
  } else {
    inputPassword.style.border = "1px solid #77ed53";
  }
});

inputEmail.addEventListener("input", (e) => {
  if (validaEmail(inputEmail.value)) {
    inputEmail.style.border = "1px solid #77ed53";
  } else {
    inputEmail.style.border = "1px solid red";
  }
});

function validaEmail(email) {
  const emailRegex =
    /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
}

button.addEventListener('click', (e) => {
  e.preventDefault();

  let isEmpty = false;

  inputs.forEach(input => {
    if (input.value === "") {
      input.style.border = "1px solid red";
      isEmpty = true;
    } else {
      alert('usuario cadastrado com sucesso!')
      isEmpty = false;
    }
  });

  if(isEmpty) {
    handleLabel("preencha todos os campos");
  }
});

function handleLabel(message){
    labels.forEach((l) => {
      const span = document.createElement("span");
      span.innerText = message;
      l.appendChild(span);

      setTimeout(() => {
        span.style.opacity = 0;
        span.style.display = "none";
      }, 6000)
    });
}