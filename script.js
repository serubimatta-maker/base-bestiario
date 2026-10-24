const bola = document.getElementById("bola");
const boton = document.getElementById("btn");
const resultado = document.getElementById("resultado");
const audio = new Audio("./assets/img/girarbingo.mp3");
const numeros = [1, 2, 3, 4, 5];

let bolasDisponibles = [...numeros];

boton.addEventListener("click", () => {
  const nuevaRonda = bolasDisponibles.length === 0;

  if (nuevaRonda) {
    bolasDisponibles = [...numeros];
  }

  const indice = Math.floor(Math.random() * bolasDisponibles.length);
  const [numero] = bolasDisponibles.splice(indice, 1);

  bola.src = `./assets/img/bola_${numero}.png`;
  bola.alt = `Bola de bingo número ${numero}`;
  

  audio.play();

  let 
});
  