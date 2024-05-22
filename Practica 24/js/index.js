let formulario = document.getElementById("formularioAgregar");
let nombre = document.getElementById("nombre");
let fecha = document.getElementById("fecha");
let descripcion = document.getElementById("descripcion");
let imagenUrl = document.getElementById("imagenUrl");
let mediaUrl = document.getElementById("mediaUrl");
let listaTareas = document.getElementById("listaTareas");
let btnGuardar = document.getElementById("btnGuardar");

let formularioEditar = document.getElementById("formularioEditar");
let nombreEditar = document.getElementById("nombreEditar");
let fechaEditar = document.getElementById("fechaEditar");
let descripcionEditar = document.getElementById("descripcionEditar");
let imagenUrlEditar = document.getElementById("imagenUrlEditar");
let mediaUrlEditar = document.getElementById("mediaUrlEditar");
let btnGuardarEditar = document.getElementById("btnGuardarEditar");

let tareas = [
    {
        nombre: "CJ",
        fecha: "2021-09-17",
        descripcion: "Aprender JS",
        imagenUrl: "data:image/png;base64,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",
        mediaUrl: "https://youtu.be/DHjqpvDnNGE"
    },
    {
        nombre: "Paco",
        fecha: "2024-05-14",
        descripcion: "Hacer tortas para todos",
        imagenUrl: "data:image/jpeg;base64,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",
        mediaUrl: "https://youtu.be/EzWzHGdhj3k"
    },
    {
        nombre: "Luis",
        fecha: "2022-02-22",
        descripcion: "Ver la pelicula de Silk Road",
        imagenUrl: "https://m.media-amazon.com/images/S/pv-target-images/e7127fd1cb80d03ca35e1117ea3d62a8663f4ed8a266b8e4b6206472217f47bd.jpg",
        mediaUrl: "https://youtu.be/Y3VJePRaxEg"
    }
];

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarDatos();
    mostrarTareas();
    cerrarModal();
    formulario.reset();
});

formularioEditar.addEventListener("submit", (e) => {
    e.preventDefault();
    guardarEdicion();
    mostrarTareas();
    cerrarModalEditar();
    formularioEditar.reset();
});

let cerrarModal = () => {
    btnGuardar.setAttribute("data-bs-dismiss", "modal");
    btnGuardar.click();
}

let cerrarModalEditar = () => {
    btnGuardarEditar.setAttribute("data-bs-dismiss", "modal");
    btnGuardarEditar.click();
}

let agregarDatos = () => {
    let tarea = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value,
        imagenUrl: imagenUrl.value,
        mediaUrl: mediaUrl.value
    };
    tareas.push(tarea);
}

let mostrarTareas = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
        <div class="row">
            <div class="col-12 col-md-2 border p-3">
                <strong>${tarea.nombre}</strong>
            </div>
            <div class="col-12 col-md-2 border p-3">
                <strong>${tarea.fecha}</strong>
            </div>
            <div class="col-12 col-md-2 border p-3">
                <strong>${tarea.descripcion}</strong>
            </div>
            <div class="col-12 col-md-2 border p-3">
                <img src="${tarea.imagenUrl}" alt="Imagen de ${tarea.nombre}" class="img-fluid">
            </div>
            <div class="col-12 col-md-2 border p-3">
                ${tarea.mediaUrl ? `<a href="${tarea.mediaUrl}" target="_blank">Ver/Reproducir</a>` : ""}
            </div>
            <div class="col-12 col-md-2 border p-3 text-center">
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editarModal" onClick="editarTarea(${indice})">
                    <i class="bi bi-pencil"></i> Editar
                </button>
                <button class="btn btn-danger" onClick="borrarTarea(${indice})">
                    <i class="bi bi-trash"></i> Borrar
                </button>
            </div>
        </div>
        `;
    });
}

let editarTarea = (indice) => {
    let tarea = tareas[indice];
    nombreEditar.value = tarea.nombre;
    fechaEditar.value = tarea.fecha;
    descripcionEditar.value = tarea.descripcion;
    imagenUrlEditar.value = tarea.imagenUrl;
    mediaUrlEditar.value = tarea.mediaUrl;

    btnGuardarEditar.onclick = () => {
        guardarEdicion(indice);
    };
}

let guardarEdicion = (indice) => {
    tareas[indice] = {
        nombre: nombreEditar.value,
        fecha: fechaEditar.value,
        descripcion: descripcionEditar.value,
        imagenUrl: imagenUrlEditar.value,
        mediaUrl: mediaUrlEditar.value
    };
}

let borrarTarea = (indice) => {
    if (confirm("¿Estas seguro de borrar la tarea?")) {
        tareas.splice(indice, 1);
        mostrarTareas();
    }
}

mostrarTareas();
