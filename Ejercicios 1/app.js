// Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  console.log("Fuera de la función:", functionVariable);
  var functionVariable = "Soy una variable local.";
  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }
  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();

function quizScope() {
    alert(`
    Mira el siguiente código:

    // Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";
  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }
  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();
    
    `);

    console.log(`
    Mira el siguiente código:

    // Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";
  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }
  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();
    
    `);

    alert("Ahora responde las siguientes preguntas, recuerda responder si o no a todas las preguntas... No te preocupes el código lo puedes encontrar en la consola");

    let pregunta1BlockScope = prompt(`¿Crees que se pueda acceder a la variable "blockVariable" de la siguiente manera?
    function testScope() {
        // Function Scope
        var functionVariable = "Soy una variable local.";
        console.log("Esta es la pregunta: " + blockVariable);
        if (true) {
          // Block Scope
          let blockVariable = "Soy una variable de bloque.";
          console.log("Dentro del bloque:", blockVariable);
        }
        console.log("Dentro de la función:", functionVariable);
      }
    `);

    let pregunta2BlockScope = prompt(`Y si lo hacemos de esta manera ¿Funcionará?
    function testScope() {
        // Function Scope
        var functionVariable = "Soy una variable local.";
        console.log("Esta es la pregunta: " + blockVariable);
        if (true) {
          // Block Scope
          let blockVariable = "Soy una variable de bloque.";
          console.log("Dentro del bloque:", blockVariable);
        }
        console.log("Esta es la pregunta: " + blockVariable);

        console.log("Dentro de la función:", functionVariable);
      }
    `);

    let pregunta1FunctionScope = prompt(`¿Es posible acceder al valor de la variable "functionVariable" de esta manera?
    function testScope() {
        // Function Scope
        console.log("Esta es la pregunta: " + functionVariable);
        var functionVariable = "Soy una variable local.";
        if (true) {
          // Block Scope
          let blockVariable = "Soy una variable de bloque.";
          console.log("Dentro del bloque:", blockVariable);
        }
        console.log("Esta es la pregunta: " + blockVariable);

        console.log("Dentro de la función:", functionVariable);
      }
    `);

    let pregunta2FunctionScope = prompt(`¿Basados en la pregunta anterior el resultado de ese console.log es Esta es la pregunta: undefined?
    function testScope() {
        // Function Scope
        console.log("Esta es la pregunta: " + functionVariable);
        var functionVariable = "Soy una variable local.";
        if (true) {
          // Block Scope
          let blockVariable = "Soy una variable de bloque.";
          console.log("Dentro del bloque:", blockVariable);
        }
        console.log("Esta es la pregunta: " + blockVariable);

        console.log("Dentro de la función:", functionVariable);
      }
    `);

    let pregunta1GlobalScope = prompt(`¿Crees que podamos acceder al valor de la "globalVariable" desde el Block Scope? así...
    // Global Scope
    var globalVariable = "Soy una variable global.";
    function testScope() {
        // Function Scope
        var functionVariable = "Soy una variable local.";
        if (true) {
          // Block Scope
          let blockVariable = "Soy una variable de bloque.";
          console.log("Dentro del bloque:", blockVariable);
          console.log("Esta es la pregunta: " + globalVariable);
        }
        console.log("Esta es la pregunta: " + blockVariable);

        console.log("Dentro de la función:", functionVariable);
      }
    `);

    validarRespuestasBlockScope(pregunta1BlockScope, pregunta2BlockScope);
    validarRespuestasFunctionScope(pregunta1FunctionScope, pregunta2FunctionScope);
    validarRespuestasGlobalScope(pregunta1GlobalScope);
}

function validarRespuestasBlockScope(pregunta1, pregunta2) {
    let respuesta1 = () => {
        if (!((pregunta1.toLowerCase() === "si") || (pregunta1.toLowerCase() === "no"))) {
            return "Ingresaste una respuesta invalida o no ingresaste respuesta"
        };
        
    };
};

function validarRespuestasFunctionScope(pregunta1, pregunta2) {
    
};

function validarRespuestasGlobalScope(pregunta1) {
    
};







quizScope()