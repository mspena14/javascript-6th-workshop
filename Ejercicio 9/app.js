function obtenerTiempo() {
    return new Promise((resolve, reject) => {
        const segundos = prompt("Ingresa el tiempo que desea esperar en segundos:").trim();
        if (!(segundos > 0)) return reject('Debes ingresar un número mayor a 0.');
        if (!segundos) return reject('No ingresaste respuesta.');
        if (isNaN(segundos)) return reject('Debes ingresar un número.');

        resolve(segundos);
    });
};

function imprimirMensaje(segundos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Han pasado ${segundos} segundos.`);
            resolve();
        }, segundos * 1000);
    });
};

function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            data.forEach(posts => {
                console.log(`Titulo: ${posts.title}

Contenido: ${posts.body}
                    `);
            });
        })
        .catch(err => {
            console.error('Ocurrió un error al obtener los datos:', err);
        });
};

obtenerTiempo()
    .then(segundos => imprimirMensaje(segundos))
    .then(fetchData)
    .catch(err => {
        console.error("Error:", err);
    });