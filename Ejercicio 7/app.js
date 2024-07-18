function prediccion() {
alert(`Mira este script:
1 == console.log("Inicio del script");

2 == setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

3 == setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

4 == Promise.resolve("Promesa resuelta").then(console.log);

5 == console.log("Fin del script");

Lo puedes encontrar en la consola también.`)

console.log(`Mira este script:
1 == console.log("Inicio del script");

2 == setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

3 == setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

4 == Promise.resolve("Promesa resuelta").then(console.log);

5 == console.log("Fin del script");

Lo puedes encontrar en la consola también.`)

let primero = prompt(`Ahora ingresa en los siguientes prompts el número del mensaje crees que estará en la posición indicada.

En este caso ¿Cuál crees que será el primer mensaje mostraso?
`);

let segundo = prompt(`¿Cuál crees que será el segundo mensaje mostrado?
`);

let tercero = prompt(`¿Cuál crees que será el tercer mensaje mostrado?
`);

let cuarto = prompt(`¿Cuál crees que será el cuarto mensaje mostrado?
`)

let quinto = prompt(`¿Cuál crees que será el quinto mensaje mostrado?
`)
return [primero, segundo, tercero, cuarto, quinto];

}

// Función para verificar la predicción del usuario
function verificarPrediccion() {
  const prediccionUsuario = prediccion();
  const ordenReal = [
    "1",
    "5",
    "4",
    "2",
    "3"
  ];

  const explicacion = [
    "El primer mensaje debe estar en la posición 1. Porque es una tarea sincrona por lo que el event loop lo ejecuta directamente.",
    "El quinto mensaje debe estar en la posición 2. Porque al igual que el primero es una tarea sincrona, entonces event loop le da prioridad a su ejecución por encima de los que se llamaron antes por más que tengan un timer de 0.",
    "El cuarto mensaje debe estar en la posición 3. Porque para el event loop las promesas son micro tareas a las cuales les da prioridad de ejecución por encima de las macro tareas, pero por debajo de las tareas sincronas.",
    "El segundo mensaje debe estar en la posición 4. Porque se trata de una macro tarea que al ser procesada por el event loop le da menor prioridad de jecución que a las demás y se ejecutan en el orden que las haya leído JS pero después de las tareas sincornas y las micro tareas.",
    "El tercer mensaje debe estar en la posición 5. Porque se trata de una macro tarea que al ser procesada por el event loop le da menor prioridad de jecución que a las demás y se ejecutan en el orden que las haya leído JS pero después de las tareas sincornas y las micro tareas."
  ]

  const errores = [];
  const todasCorrectas = [];
  for (let i = 0; i < ordenReal.length; i++) {
    if (prediccionUsuario[i] !== ordenReal[i]) {
      errores.push(`Mensaje ${i + 1}: Esperaba "${ordenReal[i]}", pero recibí "${prediccionUsuario[i]}. Explicación: ${explicacion[i]}`);
    } else {
        todasCorrectas.push(`Mensaje ${i + 1}: Perfecto tu elección fue "${prediccionUsuario[i]}" lo cual es correcto. Explicación: ${explicacion[i]}`);
    }
  }
console.log(errores);

  if (errores.length === 0) {
    console.log(`¡Felicitaciones! Predijiste el orden correcto.\n${todasCorrectas.join('\n\n')}`);
  } else if (errores.length === 1) {
    console.log(`Hubo un error en tu predicción:\n${errores[0]}`);
  } else {
    console.log(`Hubo varios errores en tu predicción:\n${errores.join('\n\n')}`);
  }
}

verificarPrediccion()
