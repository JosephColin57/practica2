const prompt = require("prompt-sync")();

let listaNombres = [];
let deboContinuar = true;


while (deboContinuar === true) {
  const respuesta = prompt("Ingresa un nombre (fin para terminar): ");

  if (respuesta === "fin") {
    deboContinuar = false;
  } else {
    listaNombres.push(respuesta);
  }
}

let nombreMasLargo = listaNombres [0]


for (let nombre of listaNombres)

if (nombre.length > nombreMasLargo.length){
  nombreMasLargo = nombre
}

let nombreMasCorto = listaNombres [0]

for (let nombre of listaNombres)

if (nombre.length < nombreMasCorto.length){
  nombreMasCorto = nombre
}

let conteoNombres = {};
let duplicados = [];

listaNombres.forEach(nombre => {
  if (conteoNombres[nombre]) {
    conteoNombres[nombre] += 1;
  } else {
    conteoNombres[nombre] = 1;
  }
});

for (let nombre in conteoNombres) {
  if (conteoNombres[nombre] > 1) {
    duplicados.push(`${nombre} (repetido ${conteoNombres[nombre]} veces)`);
  }
}
  
console.log("Ingresaron", listaNombres.length, "nombres");

if (duplicados.length > 0) {
    console.log("Existen valores repetidos: ", duplicados.join(", "));
  } else {
    console.log("No hay valores repetidos.");
  }

console.log("El nombre mas largo: ", nombreMasLargo)

console.log("El nombre mas corto: ", nombreMasCorto)