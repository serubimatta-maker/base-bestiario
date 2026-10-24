const bolas = document.querySelectorAll(".bola");
const boton = document.getElementById("btn");
const resultado = document.getElementById("resultado");
const audio = new Audio("./assets/img/girarbingo.mp3");
const numeros = [1, 2, 3, 4, 5];

let bolasDisponibles = [...numeros];

boton.addEventListener("click", () => {
  const numerosElegidos = [];

  while (numerosElegidos.length < bolas.length) {
    if (bolasDisponibles.length === 0) {
      bolasDisponibles = numeros.filter(
        (numero) => !numerosElegidos.includes(numero),
      );
    }

    const indice = Math.floor(Math.random() * bolasDisponibles.length);
    const [numero] = bolasDisponibles.splice(indice, 1);
    numerosElegidos.push(numero);
  }

  bolas.forEach((bola, indice) => {
    const numero = numerosElegidos[indice];
    bola.src = `./assets/img/bola_${numero}.png`;
    bola.alt = `Bola de bingo número ${numero}`;
  });

  audio.play();
});
  