//Iniciamos el contador desde arriba para evitar problemas con el hosting
const generarIdReserva = generarGeneradorId();
let rooms = [];
let roomTypes = [];
let reservations = [];
const url = './data.json'

// Generador de ID Único para Reservas
function generarGeneradorId() {
    let id = 1;
    return function () {
        return id++;
    };
}

// Simulando fetch para cargar datos desde data.json
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("URL errada o ruta no encontrada.");
                }
                return response.json();
            })
            .then(data => {
                ({ rooms, roomTypes, reservations } = data);
                resolve(data);
            })
            .catch(error => {
                console.error('Ocurrió un error al obtener los datos:', error);
                reject(error);
            })
        }, 3000);
        
    })
}

// Guardar datos en localStorage
function saveData(data) {
    localStorage.setItem('hotelData', JSON.stringify(data));
}

// Cargar datos desde localStorage
function loadData() {
    const data = localStorage.getItem('hotelData');
    return data ? JSON.parse(data) : null;
}

// Cargar y mostrar datos
function cargarYMostrarData() {
    return new Promise((resolve, reject) => {
        const storedData = loadData();
        if (storedData) {
            ({ rooms, roomTypes, reservations } = storedData);
            console.log("Datos cargados desde localStorage.");
            resolve(storedData);
        } else {
            fetchData().then(data => {
                ({ rooms, roomTypes, reservations } = data);
                saveData(data);
                console.log("Datos iniciales cargados y guardados en localStorage.");
                resolve(data);
            }).catch(error => {
                console.error("Error al cargar datos:", error);
                reject(error);
            });
        }
    });
}

// Función crear reserva
function crearReserva(numeroHabitacion, fechaInicio, fechaFin, huesped, cantidadHuespedes) {
    const habitacion = rooms.find(room => room.number === numeroHabitacion);

    if (!habitacion) {
        alert("La habitación no existe.");
        return;
    }

    const tipoHabitacion = roomTypes.find(type => habitacion.roomTypeId === type.id);
    if (tipoHabitacion.capacity < cantidadHuespedes) {
        alert("La capacidad de la habitación es insuficiente.");
        return;
    }

    const disponibilidad = verificarDisponibilidad(numeroHabitacion, fechaInicio, fechaFin);
    if (!disponibilidad) {
        alert("La habitación no está disponible en las fechas seleccionadas.");
        return;
    }

    const nuevaReserva = {
        id: generarIdReserva(),
        roomNumber: numeroHabitacion,
        startDate: fechaInicio,
        endDate: fechaFin,
        guest: huesped.toLowerCase(),
        numberOfguests: cantidadHuespedes
    };

    reservations.push(nuevaReserva);
    alert("Reserva creada con éxito.");
    saveData({ rooms, roomTypes, reservations });
}

// Verificar Disponibilidad
function verificarDisponibilidad(numeroHabitacion, fechaInicio, fechaFin, reservaId) {
    let reservationsFiltered = reservations.filter(reservation => reservation.id !== reservaId);
    console.log(reservationsFiltered);
    return !reservationsFiltered.some(reserva =>
        reserva.roomNumber === numeroHabitacion &&
        ((fechaInicio >= reserva.startDate && fechaInicio <= reserva.endDate) ||
            (fechaFin >= reserva.startDate && fechaFin <= reserva.endDate))
    );
}

// Función ver reservas actuales
function verReservas(huesped) {
    const reservasHuesped = reservations.filter(reserva => reserva.guest === huesped.toLowerCase().trim());

    if (reservasHuesped.length === 0) {
        return "No hay reservas para este huésped.";
    }

    return reservasHuesped.map(reserva => {
        const habitacion = rooms.find(room => room.number === reserva.roomNumber);
        const tipoHabitacion = roomTypes.find(type => type.id === habitacion.roomTypeId);

        return `Reserva ID: ${reserva.id}, Habitación: ${reserva.roomNumber}, Tipo: ${tipoHabitacion.name}, Inicio: ${reserva.startDate}, Fin: ${reserva.endDate}\n`;
    })
}

// Función cancelar reserva
function cancelarReserva(idReserva) {
    const indice = reservations.findIndex(reserva => reserva.id === idReserva);

    if (indice === -1) {
        alert("Reserva no encontrada.");
        return;
    }

    if (!confirm('¿Estás seguro de cancelar tu reserva?')) {
        return;
    }


    reservations.splice(indice, 1);
    alert("Reserva cancelada con éxito.");
    saveData({ rooms, roomTypes, reservations });
}

// Función editar reserva
function editarReserva(idReserva, nuevaFechaInicio, nuevaFechaFin) {
    const reserva = reservations.find(reserva => reserva.id === idReserva);

    if (!reserva) {
        alert("Reserva no encontrada.");
        return;
    }

    const disponibilidad = verificarDisponibilidad(reserva.roomNumber, nuevaFechaInicio, nuevaFechaFin, reserva.id);
    if (!disponibilidad) {
        alert("La habitación no está disponible en las nuevas fechas seleccionadas.");
        return;
    }

    reserva.startDate = nuevaFechaInicio;
    reserva.endDate = nuevaFechaFin;
    alert("Reserva editada con éxito.");
    saveData({ rooms, roomTypes, reservations });
}

// Función mostrar secciones
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    if (sectionId === "ver-disponibles") {
        mostrarDisponibles()
    }

    document.getElementById(sectionId).style.display = 'block';
}

// Funcion inicializadora para reservar
function iniciarReservar() {
    const numeroHabitacion = parseInt(document.getElementById('numero-habitacion').value);
    const fechaInicio = document.getElementById('fecha-inicio').value;
    const fechaFin = document.getElementById('fecha-fin').value;
    const huesped = document.getElementById('huesped').value.trim()
    const cantidadHuespedes = parseInt(document.getElementById('cantidad-huespedes').value);

    crearReserva(numeroHabitacion, fechaInicio, fechaFin, huesped, cantidadHuespedes);
}

// Funcion inicializadora para ver reservas
function iniciarVerReservas() {
    const huespedVer = document.getElementById('ver-huesped').value;
    const reservas = verReservas(huespedVer);

    const listaReservas = document.getElementById('lista-reservas');
    listaReservas.innerHTML = '';

    if (typeof reservas === 'string') {
        listaReservas.innerHTML = `<li>${reservas}</li>`;
    } else {
        reservas.forEach(reserva => {
            const li = document.createElement('li');
            li.textContent = reserva;
            listaReservas.appendChild(li);
        });
    }
}

// Funcion inicializadora para cancelar reservas
function iniciarCancelarReserva() {
    const idReservaCancelar = parseInt(document.getElementById('idReservaCancelar').value);
    cancelarReserva(idReservaCancelar);
}

// Funcion inicializadora para editar reservas
function iniciarEditarReserva() {
    const idReservaEditar = parseInt(document.getElementById('id-reserva-editar').value);
    const nuevaFechaInicio = document.getElementById('nueva-fecha-inicio').value;
    const nuevaFechaFin = document.getElementById('nueva-fecha-fin').value;

    editarReserva(idReservaEditar, nuevaFechaInicio, nuevaFechaFin);
}

//Funcion inicializadora para mostrar disponibles
function mostrarDisponibles() {
    const listaDisponibles = document.getElementById('lista-disponibles');
    listaDisponibles.innerHTML = '';
    const habitacionesDisponibles = rooms.filter(room => room.available !== false)
    habitacionesDisponibles.forEach(habitacion => {
        const habitacionLi = document.createElement('li');
        const habitacionH4 = document.createElement('h4');
        const habitacionPTipo = document.createElement('p');
        const habitacionPDescripcion = document.createElement('p');
        const habitacionPCapacidad = document.createElement('p');

        habitacionH4.textContent = `Habitación ${habitacion.number}`;
        habitacionPTipo.textContent = `Tipo: ${roomTypes.find(type => type.id === habitacion.roomTypeId).name}`;
        habitacionPDescripcion.textContent = `Descripción: ${roomTypes.find(type => type.id === habitacion.roomTypeId).description}`;
        habitacionPCapacidad.textContent = `Capacidad: ${roomTypes.find(type => type.id === habitacion.roomTypeId).capacity}`;

        habitacionLi.appendChild(habitacionH4);
        habitacionLi.appendChild(habitacionPTipo);
        habitacionLi.appendChild(habitacionPDescripcion);
        habitacionLi.appendChild(habitacionPCapacidad);
        listaDisponibles.appendChild(habitacionLi);
    });
}

// Iniciamos la ejecución trayendo los datos y cargandolos en el localStorage
cargarYMostrarData().then(() => {
    showSection('ver-disponibles');

}).catch((error) => {
    console.error("Error al manejar la promesa:", error);
});

