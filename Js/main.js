const robotron = document.querySelector("#robotron");

robotron.addEventListener("click", () => {
  console.log("cliquei no robo");
});

// Você pode usar function ou () => arrow function

function dizOi(nome) {
  console.log(nome);
  console.log("Bora pro jogo!");
}

dizOi("Gustavo");
