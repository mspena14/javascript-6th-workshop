alert("Abre la consola...")

console.log(`
Es hora de ver hosting...
Mira el siguiente código y ayudame a predecir los resultados de los console.log():

// vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};

`);

function varsCalls() {
    console.log("Empecemos con vars call");
    let prompCaso1 = prompt(`¿Cuál crees que sea el resultado de console.log("Valor de a:", a);?`);
    let prompCaso2 = prompt(`¿Cuál crees que sea el resultado de console.log("Valor de b:", b);`);
    let prompCaso3 = prompt(`¿Cuál crees que sea el resultado de console.log("Valor de c:", c);`);


    let caso1 = () => {
        try {
            let resC1 = a
            var a = 1;
            return `Valor de a: ${resC1}`
        } catch (error) {
            return `${error}`
        }
    };

    let caso2 = () => {
        try {
            let resC2 = b
            let b = 2;
            return `Valor de a: ${resC2}`
        } catch (error) {
            return `${error}`
        }
    };

    let caso3 = () => {
        try {
            let resC3 = c
            const c = 3;
            return `Valor de a: ${resC3}`
        } catch (error) {
            return `${error}`
        }
    };

    let respuestaCaso1 = caso1();
    console.log("Tu respuesta en la primera pregunta: " + prompCaso1);
    console.log("Y este es el resultado: " + respuestaCaso1);

    let respuestaCaso2 = caso2();
    console.log("Tu respuesta en la primera pregunta: " + prompCaso2);
    console.log("Y este es el resultado: " + respuestaCaso2);

    let respuestaCaso3 = caso3();
    console.log("Tu respuesta en la primera pregunta: " + prompCaso3);
    console.log("Y este es el resultado: " + respuestaCaso3);

    console.log("Este resultado se da porque var es llevada hacía arriba de la función y es inicializada con con undefined, mientras que let y const no pueden ser llamadas antes de ser declaradas, Javascript no le asigna ningún valor ni las inicializa antes de que llegué a la porción de código donde las declaras.");
};

function functionsCalls() {
    console.log("Empecemos con functions call");
    let prompCaso1 = prompt(`¿Cuál crees que sea el resultado de console.log("Resultado de funcionDeclarada:", funcionDeclarada());?`);
    let prompCaso2 = prompt(`¿Cuál crees que sea el resultado de console.log"Resultado de funcionExpresada:", funcionExpresada());`);

    let caso1 = () => {
        try {
            let resC1 = funcionDeclarada()
            function funcionDeclarada() {
                return "Función declarada ha sido llamada.";
              }
            return `Resultado de funcionDeclarada: ${resC1}`
        } catch (error) {
            return `${error}`
        }
    };

    let caso2 = () => {
        try {
            let resC2 = funcionExpresada()
            const funcionExpresada = function () {
                return "Función expresada ha sido llamada.";
              };
            return `Resultado de funcionExpresada: ${resC2}`
        } catch (error) {
            return `${error}`
        }
    };

    let respuestaCaso1 = caso1()
    console.log("Tu respuesta en la primera pregunta: " + prompCaso1)
    console.log("Y este es el resultado: " + respuestaCaso1)

    let respuestaCaso2 = caso2()
    console.log("Tu respuesta en la primera pregunta: " + prompCaso2)
    console.log("Y este es el resultado: " + respuestaCaso2)

    console.log("Este resultado se da porque la función declarada, al igual que var, es llevada hacía arriba de la función que la contiene y en este caso se la lleva completa con todo su mecanismo interno, mientras que las funciones expresadas con const no pueden ser llamadas antes de ser declaradas, el hosting no les aplica aunque sean una función ya que están expresadas con un const que al igual que en el ejemplo anterior no puede ser inicializa antes de que llegué a la porción de código donde las declaras.");

};

varsCalls()
functionsCalls()