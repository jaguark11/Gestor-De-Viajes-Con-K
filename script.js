// Funcionalidad para Paquetes Turísticos
document.getElementById('formPaquete').addEventListener('submit', function(e) {
    e.preventDefault();

    let id = document.getElementById('paqueteId').value;
    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;
    let precio = document.getElementById('precio').value;
    let actividades = document.getElementById('actividades').value;

    let paquete = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        actividades: actividades
    };

    let paquetes = JSON.parse(localStorage.getItem('paquetes')) || [];

    if (id) {
        paquetes[id] = paquete;
    } else {
        paquetes.push(paquete);
    }

    localStorage.setItem('paquetes', JSON.stringify(paquetes));

    document.getElementById('formPaquete').reset();
    document.getElementById('paqueteId').value = '';

    mostrarPaquetes();
});

function mostrarPaquetes() {
    let paquetes = JSON.parse(localStorage.getItem('paquetes')) || [];
    let paquetesList = document.getElementById('paquetesList');
    paquetesList.innerHTML = '';

    paquetes.forEach(function(paquete, index) {
        paquetesList.innerHTML += `
            <div>
                <h3>${paquete.nombre}</h3>
                <p>${paquete.descripcion}</p>
                <p><strong>Precio:</strong> $${paquete.precio}</p>
                <p><strong>Actividades:</strong> ${paquete.actividades}</p>
                <button onclick="editarPaquete(${index})">Editar</button>
                <button onclick="eliminarPaquete(${index})">Eliminar</button>
            </div>
            <hr>
        `;
    });
}

function editarPaquete(index) {
    let paquetes = JSON.parse(localStorage.getItem('paquetes')) || [];
    let paquete = paquetes[index];

    document.getElementById('paqueteId').value = index;
    document.getElementById('nombre').value = paquete.nombre;
    document.getElementById('descripcion').value = paquete.descripcion;
    document.getElementById('precio').value = paquete.precio;
    document.getElementById('actividades').value = paquete.actividades;
}

function eliminarPaquete(index) {
    let paquetes = JSON.parse(localStorage.getItem('paquetes')) || [];
    paquetes.splice(index, 1);
    localStorage.setItem('paquetes', JSON.stringify(paquetes));
    mostrarPaquetes();
}

// Mostrar los paquetes al cargar la página
mostrarPaquetes();

// Funcionalidad para Reservas de Vuelos y Hoteles
document.getElementById('formReserva').addEventListener('submit', function(e) {
    e.preventDefault();

    let tipo = document.getElementById('tipo').value;
    let destino = document.getElementById('destino').value;
    let fecha = document.getElementById('fecha').value;

    let reserva = {
        tipo: tipo,
        destino: destino,
        fecha: fecha
    };

    let reservas = JSON.parse(localStorage.getItem('reservas')) || [];
    reservas.push(reserva);
    localStorage.setItem('reservas', JSON.stringify(reservas));

    document.getElementById('formReserva').reset();
    mostrarReservas();
});

function mostrarReservas() {
    let reservas = JSON.parse(localStorage.getItem('reservas')) || [];
    let reservasList = document.getElementById('reservasList');
    reservasList.innerHTML = '';

    reservas.forEach(function(reserva, index) {
        reservasList.innerHTML += `
            <div>
                <h3>${reserva.tipo.toUpperCase()} - ${reserva.destino}</h3>
                <p><strong>Fecha:</strong> ${reserva.fecha}</p>
                <button onclick="eliminarReserva(${index})">Eliminar</button>
            </div>
            <hr>
        `;
    });
}

function eliminarReserva(index) {
    let reservas = JSON.parse(localStorage.getItem('reservas')) || [];
    reservas.splice(index, 1);
    localStorage.setItem('reservas', JSON.stringify(reservas));
    mostrarReservas();
}

// Mostrar reservas al cargar la página
mostrarReservas();

// Funcionalidad para Gestión de Clientes
document.getElementById('formCliente').addEventListener('submit', function(e) {
    e.preventDefault();

    let id = document.getElementById('clienteId').value;
    let nombre = document.getElementById('nombreCliente').value;
    let email = document.getElementById('emailCliente').value;

    let cliente = {
        nombre: nombre,
        email: email
    };

    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    if (id) {
        clientes[id] = cliente;
    } else {
        clientes.push(cliente);
    }

    localStorage.setItem('clientes', JSON.stringify(clientes));

    document.getElementById('formCliente').reset();
    document.getElementById('clienteId').value = '';

    mostrarClientes();
});

function mostrarClientes() {
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    let clientesList = document.getElementById('clientesList');
    clientesList.innerHTML = '';

    clientes.forEach(function(cliente, index) {
        clientesList.innerHTML += `
            <div>
                <h3>${cliente.nombre}</h3>
                <p>${cliente.email}</p>
                <button onclick="editarCliente(${index})">Editar</button>
                <button onclick="eliminarCliente(${index})">Eliminar</button>
            </div>
            <hr>
        `;
    });
}

function editarCliente(index) {
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    let cliente = clientes[index];

    document.getElementById('clienteId').value = index;
    document.getElementById('nombreCliente').value = cliente.nombre;
    document.getElementById('emailCliente').value = cliente.email;
}

function eliminarCliente(index) {
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    clientes.splice(index, 1);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    mostrarClientes();
}

// Mostrar clientes al cargar la página
mostrarClientes();
