// Función Principal: crearSumador
function crearSumador(numeroInicial = 0) {
    // Retorna una nueva función que acepta un parámetro numeroASumar
    return function (numeroASumar = 0) {
        // La función interna suma numeroInicial y numeroASumar y retorna el resultado
        return numeroInicial + numeroASumar;
    }
}

//Creamos una función que suma 5
let sumarCinco = crearSumador(5);

//Imprimimos en consola sumarCinco(3) que basicamente traduce 5 + 3 ya que sumarCinco básicamente recuerda el valor con el que se creo y luego ejecuta la función con el parametro que se le dió.
console.log(sumarCinco(3));
console.log(sumarCinco(10));

let sumarTres = crearSumador(3);

console.log(sumarTres());
console.log(sumarTres(20));

let sumarDiez = crearSumador(10);

console.log(sumarDiez(5));
console.log(sumarDiez(5+6));