console.log("Mensaje 1: Inmediatamente");

setTimeout(() => {
    console.log("Mensaje 2: Con timeout de 0 segundos");
}, 0);

setTimeout(() => {
    console.log("Mensaje 3: Con timeout de 1 segundo");
}, 1000);

setTimeout(() => {
    console.log(`- ¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos? 
R// Porque el setTimeout crea una macro tarea y el event loop lo posisiona despues de las tareas sincronas y las microtareas.

- ¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?
R// Event loop lo que hace que todo lo que es sincrono le asigna una tarea en el orden que esta va pasando y la ejecuta directamente, mientras que las micro tareas y las macro tareas no funcionan de esta manera, las macro tareas son llevadas hasta el final, justo despues de las micro tareas que son las siguientes despues de las sincronas.
`);

}, 1000);
