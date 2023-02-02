const subtrair = document.querySelector("#subtrair");
const braco = document.querySelector("#braco");
const somar = document.querySelector("#somar");

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.textContent);
  });
});

// somar.addEventListener("click", () => {
//   manipulaDados("somar");
// });

// subtrair.addEventListener("click", () => {
//   manipulaDados("subtrair");
// });

function manipulaDados(operacao) {
  if (operacao === "-") {
    braco.value = parseInt(braco.value) - 1;
  } else {
    braco.value = parseInt(braco.value) + 1;
  }
}

// const robotron = document.querySelector("#robotron");

// robotron.addEventListener("click", () => {
//   console.log("cliquei no robo");
// });

// Você pode usar function ou () => arrow function

// function dizOi(nome) {
//   console.log(nome);
//   console.log("Bora pro jogo!");
// }

// dizOi("Gustavo");
