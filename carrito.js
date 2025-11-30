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
    alert("Producto agregado al carrito!");
}

// Mostrar carrito en carrito.html
export function mostrarCarrito() {
    const lista = document.getElementById("listaCarrito");
    const total = document.getElementById("totalCarrito");
    const carrito = obtenerCarrito();

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} — $${item.precio}`;
        lista.appendChild(li);
    });

    const totalNum = carrito.reduce((acc, item) => acc + Number(item.precio), 0);
    total.textContent = `Total: $${totalNum.toLocaleString("es-AR")}`;
}
