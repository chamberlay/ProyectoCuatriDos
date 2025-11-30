// Obtener carrito desde localStorage
export function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

// Guardar carrito
export function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Agregar producto desde otras páginas
export function agregarAlCarrito(producto) {
    const carrito = obtenerCarrito();
    carrito.push(producto);
    guardarCarrito(carrito);

    //modificar el alart por algo mejor luego
    alert("Producto agregado al carrito!");
    /////////////////////////////////////////
}

// Mostrar carrito en carrito.html
export function mostrarCarrito() {
    const lista = document.getElementById("listaCarrito");
    const total = document.getElementById("totalCarrito");
    lista.innerHTML = "";

    const carrito = obtenerCarrito();

    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.nombre} — $${item.precio}
            <button onclick="eliminarDelCarrito(${index})">❌</button>`;
        lista.appendChild(li);
    });

    const totalNum = carrito.reduce((acc, item) => acc + Number(item.precio), 0);
    total.textContent = `Total: $${totalNum.toLocaleString("es-AR")}`;
}

// Eliminar producto por índice
export function eliminarDelCarrito(index) {
    return new Promise((resolve, reject) => {
        try {
            const carrito = obtenerCarrito();
            carrito.splice(index, 1);
            guardarCarrito(carrito);
            mostrarCarrito();
            resolve(carrito);
        } catch (error) {
            reject(error);
        }
    });
}