const controle = document.querySelectorAll("[data-controle]");

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
  });
});

// somar.addEventListener("click", () => {
//   manipulaDados("somar");
// });

// subtrair.addEventListener("click", () => {
//   manipulaDados("subtrair");
// });

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador");
  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
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
