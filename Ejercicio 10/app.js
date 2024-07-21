console.log("Inicio del script");

// Macrotarea: setTimeout
setTimeout(() => {
  console.log("Macrotarea 1 second (setTimeout)");
}, 1000);

setTimeout(() => {
  console.log("Macrotarea 0 seconds (setTimeout)");
}, 0);

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    setTimeout(() => {
      console.log("Macrotarea (setTimeout) inside Microtarea 1");
      return "from micro 1";
    }, 0);
  })
  .then((message) => {
    console.log("Microtarea 2 (Promesa)");
  });

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    console.log("Microtarea 3 (Promesa)");
  })
  .then(() => {
    console.log("Microtarea 4 (Promesa)");
  });

console.log("Fin del script");

Promise.resolve()
  .then(() => {
    setTimeout(() => {
      console.log(`¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
R// Esta macrotarea pasa a la fila de las macrotareas, no se ejecuta inmediatamente, se agregará normalmente a la fila de tareas en la última posición. 
                                                                                        `);
    }, 1000);
  })
  .then(() => {
    setTimeout(() => {
      console.log(`¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?
R// Las promesas al ser microtareas el event loop le asigna un lugar en la cola de microtareas,
la cual está aparte de la cola de los setTimeOut que son las macrotareas y las ambas a su vez están aparte
de la sección de ejecución que pasa directamente a los procesos sincronos, luego pasa a ejecutar las microtareas,
que solo hasta que se termine la última microtarea se pasa a ejecutar la primera macrotarea y al terminar esta,
se inicia de nuevo el ciclo, si no hay microtareas por ejecuar, se ejecutan la siguiente macrotarea.
                                    `);
    }, 1000);
  })

setTimeout(() => {
  console.log(`¿Qué tareas se consideran macrotareas y cuáles son microtareas?
R// Las macrotareas son las tareas de mayor prioridad que incluye setTimeOut o eventos del DOM, 
por otro lado las microtareas don de menor prioridad que normalmente se relacionan con las promesas.  
                                                                `);
}, 1000);

setTimeout(() => {
  console.log(`¿Cómo se relacionan las macrotareas y microtareas con el event loop?
R// Estas se relacionan en que ambas deben respetar un orden, en que se ejecutan una después de la otra en su propia fila,
el event loop las administra, ejecuta cada fila en un orden especifico y luego empieza de nuevo el ciclo de la siguiente manera,
1- Tareas sincronas.
2- Microtareas.
3- Macrotareas.
4- Se repite el ciclo.
                                  `);
}, 1000);