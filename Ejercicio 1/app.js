// Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";
  if (true) {
    // Block Scope
    var blockVariable = "Soy una variable de bloque.";
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

  let pregunta2FunctionScope = prompt(`¿Basados en la pregunta anterior el resultado de ese console.log es "Esta es la pregunta: undefined"?
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
    if ((pregunta1.toLowerCase() !== "si") && (pregunta1.toLowerCase() !== "no")) {
      return "Ingresaste una respuesta invalida o no ingresaste respuesta."
    }

    if (pregunta1.toLowerCase() === "si") {
      return `Respuesta incorrecta, esto nos dara como resultado un ReferenceError ya que es una variable asignada dentro de un bloque de código y se está llamando a esta variable en un scope donde no está declarada. 
Pregunta para que pienses en hosting ¿Qué pasaría si en vez de let usamos var?
        `
    }

    if (pregunta1.toLowerCase() === "no") {
      return `Respuesta correcta, esto nos dara como resultado un ReferenceError ya que es una variable asignada dentro de un bloque de código y se está llamando a esta variable en un scope donde no está declarada. 
Pregunta para que pienses en hosting ¿Qué pasaría si en vez de let usamos var?
        `
    }
  };

  let respuesta2 = () => {
    if ((pregunta2.toLowerCase() !== "si") && (pregunta2.toLowerCase() !== "no")) {
      return "Ingresaste una respuesta invalida o no ingresaste respuesta."
    };

    if (pregunta2.toLowerCase() === "si") {
      return `Respuesta incorrecta, por más que la llamemos ahora abajo esto nos seguirá arrojando un ReferenceError ya que es una variable asignada dentro de un bloque de código y se está llamando a esta variable en un scope donde no está declarada. 
Pregunta para que pienses en hosting ¿Qué pasaría si en vez de let usamos var?
        `
    }

    if (pregunta2.toLowerCase() === "no") {
      return `Respuesta correcta, por más que la llamemos ahora abajo esto nos seguirá arrojando un ReferenceError ya que es una variable asignada dentro de un bloque de código y se está llamando a esta variable en un scope donde no está declarada. 
Pregunta para que pienses en hosting ¿Qué pasaría si en vez de let usamos var?
        `
    }
  };

  console.log("Resultado pregunta 1 Block Scope: " + respuesta1())
  console.log("Resultado pregunta 2 Block Scope: " + respuesta2())

};

function validarRespuestasFunctionScope(pregunta1, pregunta2) {

  let respuesta1 = () => {
    if ((pregunta1.toLowerCase() !== "si") && (pregunta1.toLowerCase() !== "no")) {
      return "Ingresaste una respuesta invalida o no ingresaste respuesta."
    }

    if (pregunta1.toLowerCase() === "si") {
      return `Respuesta incorrecta. La variable "functionVariable" no puede ser accedida antes de su declaración debido al alcance de la función (function scope). En JavaScript, las variables declaradas con "var" dentro de una función solo son accesibles después de su declaración y no antes. Intentar acceder a "functionVariable" antes de su declaración resultará en "undefined" porque aunque la declaración es elevada, su inicialización no lo es.`
    }

    if (pregunta1.toLowerCase() === "no") {
      return `Respuesta correcta. La variable "functionVariable" no puede ser accedida antes de su declaración debido al alcance de la función (function scope). En JavaScript, las variables declaradas con "var" dentro de una función solo son accesibles después de su declaración y no antes. Intentar acceder a "functionVariable" antes de su declaración resultará en "undefined" porque aunque la declaración es elevada, su inicialización no lo es.`
    }
  };

 let respuesta2 = () => {
    if ((pregunta2.toLowerCase() !== "si") && (pregunta2.toLowerCase() !== "no")) {
      return "Ingresaste una respuesta invalida o no ingresaste respuesta."
    };

    if (pregunta2.toLowerCase() === "si") {
      return `Respuesta correcta, el resultado de ese console.log es "Esta es la pregunta: undefined" debido a que la declaración de la variable "functionVariable" es elevada pero no su inicialización, por lo tanto, su valor es "undefined".`
    }

    if (pregunta2.toLowerCase() === "no") {
      return `Respuesta incorrecta, el resultado de ese console.log es "Esta es la pregunta: undefined" debido a que la declaración de la variable "functionVariable" es elevada pero no su inicialización, por lo tanto, su valor es "undefined".`
    }
  };

  console.log("Resultado pregunta 1 Function Scope: " + respuesta1())
  console.log("Resultado pregunta 2 Function Scope: " + respuesta2())

};

function validarRespuestasGlobalScope(pregunta) {

  let respuesta = () => {
    if ((pregunta.toLowerCase() !== "si") && (pregunta.toLowerCase() !== "no")) {
      return "Ingresaste una respuesta invalida o no ingresaste respuesta."
    };

    if (pregunta.toLowerCase() === "si") {
      return `Respuesta correcta, las variables globales son accesibles desde cualquier scope dentro del código.`
    }

    if (pregunta.toLowerCase() === "no") {
      return `Respuesta incorrecta, las variables globales son accesibles desde cualquier scope dentro del código.`
    }
  };

console.log("Resultado pregunta Global Scope: " + respuesta());

};


quizScope()
