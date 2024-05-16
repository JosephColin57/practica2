const prompt = require("prompt-sync")();

let listaNombres = [];
let deboContinuar = true;


while (deboContinuar === true) {
  const respuesta = prompt("Ingresa un nombre (fin para terminar): ").toLowerCase().trim();

  if (respuesta === "fin") {
    deboContinuar = false;
  } else if (!isNaN(respuesta)) {
    console.log("Por favor, ingresa un nombre valido.");
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

listaNombres.forEach(nombre => { // Se utiliza el método forEach para iterar sobre cada nombre en listaNombres.
  if (conteoNombres[nombre]) { // Se verifica si el nombre ya existe como clave en el objeto conteoNombres.
    conteoNombres[nombre] += 1; // Si el nombre ya existe, se incrementa su valor en 1 para contar la aparición adicional.
  } else {
    conteoNombres[nombre] = 1; // Si el nombre no existe, se crea una nueva entrada en conteoNombres con el nombre como clave y el valor 1.
  }
});

// console.log(conteoNombres)

for (let nombre in conteoNombres) { // Se utiliza un bucle for...in para iterar sobre todas las claves (nombres) del objeto conteoNombres.
  if (conteoNombres[nombre] > 1) {  // Se verifica si el valor asociado a la clave (nombre) actual es mayor que 1, lo que indica que el nombre se repite.
    duplicados.push(`${nombre} (repetido ${conteoNombres[nombre]} veces)`); // Si el nombre se repite, se agrega al array duplicados junto con el número de repeticiones.
  }
}

// console.log(duplicados)
  
console.log("Ingresaron", listaNombres.length, "nombres");

if (duplicados.length > 0) {
    console.log("Existen valores repetidos: ", duplicados.join(", "));
  } else {
    console.log("No hay valores repetidos.");
  }

console.log("El nombre mas largo: ", nombreMasLargo)

console.log("El nombre mas corto: ", nombreMasCorto)