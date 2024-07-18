console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
);
try {
    console.log(funcionDeclarada());
} catch (error) {
    console.log("Error:", error.message);
}

console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
);
try {
    console.log(funcionExpresada());
} catch (error) {
    console.log("Error:", error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
}

// Declaración de una función expresada
const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());

// - 4.3: Reflexión: Después de ejecutar el código, responde los siguientes puntos:
// - ¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
// R/ Lo que pasa es que las funciones declaradas funcionan correctamente mientras que las expresadas arroja error.

// - ¿Cómo difieren los resultados entre la función declarada y la función expresada?
/* R/ Lo que difiere los resultados entre las funciones es que las funciones declaradas a pesar de llamarsen antes de ser declaradas funcionan
 gracias al hosting de javascript, mientras que la función expresada al estar asignada a una constante, entonces no es posible acceder a ella antes de ser declarada.*/

// - ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
/* R/ Lo que hace JavaScript es que las funciones declaradas las envía al inicio del codigo completas con todo su código interno y 100% funcionales 
por lo que al llamarlas antes de declararlas no obtenemos un error y las funciones expresadas son asignadas a una constante que aunque sea una contante 
que contiene una función, esta no deja de funcionar como una constante común y corriente.*/


console.log(`¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?

R// Lo que pasa es que las funciones declaradas funcionan correctamente mientras que las expresadas arroja error.
`);

console.log(`¿Cómo difieren los resultados entre la función declarada y la función expresada?

R// Lo que difiere los resultados entre las funciones es que las funciones declaradas a pesar de llamarsen antes de ser declaradas funcionan gracias al hosting de javascript, mientras que la función expresada al estar asignada a una constante, entonces no es posible acceder a ella antes de ser declarada.
 `);

 console.log(`¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
 
 R// Lo que hace JavaScript es que las funciones declaradas las envía al inicio del codigo completas con todo su código interno y 100% funcionales por lo que al llamarlas antes de declararlas no obtenemos un error y las funciones expresadas son asignadas a una constante que aunque sea una contante que contiene una función, esta no deja de funcionar como una constante común y corriente.
 `);