const timeoutTime = 1000;

function manejarAsincronia(callback, promesa) {
    promesa.then(() =>
    callback("resuelto"))
    .catch(() => 
    callback("rechazado"));
};

function crearPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject();
        }, timeoutTime);
    });
};

function miCallback(resultado) {
    if (resultado === "resuelto") {
        console.log("¡Promesa cumplida y callback ejecutado!");
    } else {
        console.log("¡Promesa rechazada y callback ejecutado!");
    }
};

const promesa = crearPromesa();
manejarAsincronia(miCallback, promesa);

setTimeout(() => {
    console.log(`5.5: Despues de invocar la funcion, responde las siguientes preguntas:
    -¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo?
    R// La función continuaría funcionando sin problema solo que tardaría más o menos tiempo.
    
    - ¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
    R// La función ejecutaría el callback con un mensaje diferente según la promesa sea resuelta o rechazada, en este caso el catch recibiría el error e imprimiria el mensaje dejado y si no hay catch entonces este nos dará undefined y no ejecutará el callback.
    
    - ¿Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa?
    R//Sí, es posible y también es posible concatenar respuestas añadiendole procesos a seguir sí se obtiene un respuesta, como un paso a paso.
    `); 
}, timeoutTime);
