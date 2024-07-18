let contar = confirm("En este caso vamos a crear un contador con el cuál vamos a ir incrementando en 1 cada vez que lo desees ¿deseas empezar?");
const contador = crearContador();

function crearContador() {
    let contador = 0;
    return function incrementar() {
        contador += 1;
        return contador
    }
}

function incrementarContador() {
    while (contar) {
        console.log(contador());
        if (confirm("¿Deseas seguir incrementando el contador?")) {
            incrementarContador()
            return contar = true;
        
        } else {
            contar = false;
            console.log("Finalizando programa...");
            break;
        }
    };
};

incrementarContador()