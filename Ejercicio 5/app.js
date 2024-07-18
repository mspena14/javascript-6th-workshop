function manejarAsincronia(callback, promesa) {
    promesa.then(() => {
        callback("resuelto");
    }).catch(() => {
        callback("rechazado");
    });
}

function crearPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}

function miCallback(resultado) {
    if (resultado === "resuelto") {
        console.log("¡Promesa cumplida y callback ejecutado!");
    } else {
        console.log("¡Promesa rechazada y callback ejecutado!");
    }
}

const promesa = crearPromesa();
manejarAsincronia(miCallback, promesa);
