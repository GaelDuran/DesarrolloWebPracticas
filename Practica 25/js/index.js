let listaProductos = document.querySelector('#listaProductos');
let listaCategorias = document.querySelector('#listaCategorias');
let carrito = [];
const URLPRODUCTOS = "https://fakestoreapi.com/products";
const URLCATEGORIAS = "https://fakestoreapi.com/products/categories";

// Fetch de productos
fetch(URLPRODUCTOS)
    .then(res => res.json())
    .then(productosObtenidos => {
        console.log(productosObtenidos);
        window.productosObtenidos = productosObtenidos; // Guardamos los productos en una variable global
        mostrarProductos(productosObtenidos);
    });

// Fetch de categorías
fetch(URLCATEGORIAS)
    .then(res => res.json())
    .then(categoriasObtenidas => {
        console.log(categoriasObtenidas);
        listaCategorias.innerHTML = "";
        categoriasObtenidas.forEach(categoria => {
            let categoriaFormatted = categoria.replace(/'/g, ""); // Eliminamos comillas simples
            listaCategorias.innerHTML += `
                <li class="nav-item">
                    <a href="#" onclick="muestraProductos('${categoriaFormatted}')" class="nav-link">
                        ${categoriaFormatted.toUpperCase()}
                    </a>
                </li>
            `;
        });
    });


function mostrarProductos(productos) {
    listaProductos.innerHTML = "";
    if (productos.length === 0) {
        listaProductos.innerHTML = "<p>No hay productos disponibles en esta categoría.</p>";
    } else {
        productos.forEach((producto, indice) => {
            listaProductos.innerHTML += `
                <div class="col-12 col-md-3 py-5">
                    <div class="card">
                        <img src="${producto.image}" class="p-3 imagenProducto card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${producto.title.slice(0, 20)}</h5>
                            <p class="card-text">${producto.description.slice(0, 70)}</p>
                            <p class="card-text text-danger">$ ${producto.price}</p>
                            <a href="#" class="btn btn-primary" onclick="agregarAlCarrito(${indice})">Comprar</a>
                        </div>
                    </div>
                </div>
            `;
        });
    }
}

function muestraProductos(categoria) {
    fetch(`${URLPRODUCTOS}/category/${categoria}`)
        .then(res => res.json())
        .then(productosFiltrados => {
            console.log(productosFiltrados);
            mostrarProductos(productosFiltrados);
        });
}

function agregarAlCarrito(indice) {
    let producto = window.productosObtenidos[indice];
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    let listaCarrito = document.querySelector('#listaCarrito');
    let totalCarrito = document.querySelector('#totalCarrito');
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, indice) => {
        listaCarrito.innerHTML += `
            <li>
                ${producto.title.slice(0, 20)} - $${producto.price}
                <button onclick="eliminarDelCarrito(${indice})" class="btn btn-danger btn-sm">Eliminar</button>
            </li>
        `;
        total += producto.price;
    });

    totalCarrito.innerHTML = `Total: $${total.toFixed(2)}`;
}

function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}
