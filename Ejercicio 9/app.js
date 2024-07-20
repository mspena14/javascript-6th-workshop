/* - Crea un script interactivo que utilice setTimeout para ejecutar una acción después de un intervalo pedido al usuario.
- Suponiendo que el usuario ingreso n segundos, el script debe mostrar un mensaje en consola despues de n\*1000 milisegundos.
- Usa promesas para manejar la asincronía y mostrar el mensaje en consola.
- Usa fetch para cargar datos de la siguiente URL: https://jsonplaceholder.typicode.com/posts
- Muestra los datos en consola y maneja cualquier error que pueda ocurrir en el bloque catch de la promesa. */

const printingMessage = () => {
    const n = prompt('Ingresa el tiempo que deseas esperar en segundos')

    const messagePromise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject();
            }, n);
        });
    }
};

function scriptInteractivo() {
    const n = prompt('Ingresa el tiempo que deseas esperar en segundos')

    return new Promise((resolve) => {
         setTimeout(() => {
            resolve("Te estoy saludando")
        }, n * 1000)
    }
    )
}


scriptInteractivo()
.then(response => console.log(response))
.then(()=> {
    const response = fetch("https://jsonplaceholder.typicode.com/posts")
    return response
    .then(response => {
        const data = response.json()
        console.log(data)})
})