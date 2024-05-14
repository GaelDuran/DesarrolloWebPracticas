    let formulario = document.getElementById("formularioAgregar");
    let nombre = document.getElementById("nombre");
    let fecha = document.getElementById("fecha");
    let descripcion = document.getElementById("descripcion");
    let listaTareas = document.getElementById("listaTareas");

    let tareas = [
        {
            nombre: "CJ",
            fecha: "2021-09-17",
            descripcion: "Aprender JS"
        },
        {
            nombre: "Paco",
            fecha: "2024-05-14",
            descripcion: "Hacer tortas para todos"
        },
        {
            nombre: "Luis",
            fecha: "2022-02-22",
            descripcion: "Ver la pelicula de Silk Road"
        }
    ];

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        agregarDatos();
    });

    let agregarDatos = () => {
        console.log("Entro a la funcion agregar datos");
        let tarea = {
            nombre: nombre.value,
            fecha: fecha.value,
            descripcion: descripcion.value
        };
        tareas.push(tarea);
        console.log(tareas);
    }

    let mostrarTareas = () => {

        listaTareas.innerHTML = "";
        tareas.forEach((tarea,indice) => {
            listaTareas.innerHTML += `
            <div class="row">
                <div class="col-12 col-md-3 border p-3">
                    <strong>${ tarea.nombre }</strong>
                </div>
                <div class="col-12 col-md-3 border p-3">
                    <strong>${ tarea.fecha }</strong>
                </div>
                <div class="col-12 col-md-3 border p-3">
                    <strong>${ tarea.nombre }</strong>
                </div>
                <div class="col-12 col-md-3 border p-3 text-center">
                    <button>Editar</button>
                    <button>Borrar</button>
                </div>
            </div>
            `;
        });
    }

    mostrarTareas();
