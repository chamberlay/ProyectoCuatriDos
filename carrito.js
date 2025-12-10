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

  const mensaje = document.createElement("div");
  mensaje.textContent = "✅ Se agregó el producto al carrito";
  mensaje.className = "mensajeCarrito";
  document.body.appendChild(mensaje);

  setTimeout(() => {
    mensaje.remove();
  }, 1000);
}

// Mostrar carrito en carrito.html
export function mostrarCarrito() {
  const lista = document.getElementById("listaCarrito");
  const total = document.getElementById("totalCarrito");
  lista.innerHTML = "";

  const carrito = obtenerCarrito();

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "itemCarrito";

    if (item.img) {
      const img = document.createElement("img");
      img.src = resolverRutaImagen(item.img);
      img.alt = item.nombre || "Producto";
      img.className = "imagenCarrito";
      li.appendChild(img);
    }

    const h4 = document.createElement("h4");
    h4.textContent = item.nombre || "Sin nombre";
    h4.className = "tituloCarrito";
    li.appendChild(h4);

    const btn = document.createElement("button");
    btn.textContent = "Eliminar del carrito";
    btn.className = "botonEliminar";
    btn.onclick = () => eliminarDelCarrito(index);
    li.appendChild(btn);

    lista.appendChild(li);
  });

  actualizarResumenCarrito(carrito, total);
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

// Vaciar carrito completo
export function vaciarCarrito() {
    return new Promise((resolve, reject) => {
        try {
            guardarCarrito([]);
            mostrarCarrito();
            resolve([]);
        } catch (error) {
            reject(error);
        }
    });
}

// Actualizar resumen de compra
export function actualizarResumenCarrito(carrito, totalElement) {
  const subtotal = carrito.reduce((acc, item) => acc + Number(item.precio), 0);
  const iva = subtotal * 0.21;
  const total = subtotal + iva;

  totalElement.innerHTML = `
    Subtotal: $${subtotal.toLocaleString("es-AR")}<br>
    IVA (21%): $${iva.toLocaleString("es-AR")}<br>
    <strong>Total: $${total.toLocaleString("es-AR")}</strong>
  `;
}

// Mostrar carrito en contacto.html
export function mostrarCarritoEnContacto() {
  const lista = document.getElementById("listaCarrito");
  const mensajeVacio = document.getElementById("mensajeCarritoVacio");
  if (!lista) return; // seguridad

  lista.innerHTML = "";
  const carrito = obtenerCarrito();

  if (carrito.length === 0) {
    if (mensajeVacio) mensajeVacio.style.display = "block";
    return;
  }

  if (mensajeVacio) mensajeVacio.style.display = "none";

  carrito.forEach(item => {
    const li = document.createElement("li");
    li.className = "itemCarrito";

    if (item.img) {
      const img = document.createElement("img");
      img.src = resolverRutaImagen(item.img);
      img.alt = item.nombre || "Producto";
      img.className = "imagenCarrito";
      li.appendChild(img);
    }

    const h4 = document.createElement("h4");
    h4.textContent = item.nombre || "Sin nombre";
    h4.className = "tituloCarrito";
    li.appendChild(h4);

    lista.appendChild(li);
  });
}

function resolverRutaImagen(ruta) {
  if (!ruta) return "";
  try {
    const url = new URL(ruta, window.location.origin + "/");
    return url.href;
  } catch {
    return ruta;
  }
}



