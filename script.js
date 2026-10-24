const bolas = document.querySelectorAll(".bola");
const boton = document.getElementById("btn");
const resultado = document.getElementById("resultado");
const audioFinal = new Audio("./assets/img/NCS_SE_MGM_CASINO_WIN.wav");
const numeros = [1, 2, 3, 4, 5];

boton.addEventListener("click", () => {
  const numerosElegidos = Array.from(
    bolas,
    () => numeros[Math.floor(Math.random() * numeros.length)],
  );

  bolas.forEach((bola, indice) => {
    const numero = numerosElegidos[indice];
    bola.src = `./assets/img/bola_${numero}.png`;
    bola.alt = `Bola de bingo número ${numero}`;
  });

  if (numerosElegidos.every((numero) => numero === numerosElegidos[0])) {
    audioFinal.currentTime = 0;
    audioFinal.play();
  }
});
  