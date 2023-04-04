const inputs = document.querySelectorAll('form .input');
const labels = document.querySelectorAll('form label')
const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    e.preventDefault();

    let isEmpty = false;

    inputs.forEach(input => {
        if (input.value === "") {
          input.style.border = "1px solid red";
          isEmpty = true
        } else {
          input.style.border = "1px solid #77ed53";
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
      }, 6000)
    });
}