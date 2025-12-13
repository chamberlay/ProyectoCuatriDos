//importo el archivo env.js con las keys de Airtable
import { air_Table_Token, air_Table_Base_Id} from '../env.js';

//importo el modulo carrito.js
import { agregarAlCarrito } from "./carrito.js";

// Configuración de Airtable
const airTableToken = air_Table_Token;
const airTableBaseId = air_Table_Base_Id;

//funcion para agregar productos a las secciones
function agregarProducto(selectorCategoria, urlProducto, imagenPrincipal, tituloProducto, precioProducto) {
    const contenedorCategoria = document.querySelector(selectorCategoria);
    if (!contenedorCategoria) return;

    const contenedor = document.createElement("div");
    contenedor.className = "producto";

    const enlace = document.createElement("a");
    enlace.href = urlProducto;

    const imagen = document.createElement("img");
    imagen.src = imagenPrincipal;
    imagen.alt = tituloProducto;
    imagen.width = 300;
    imagen.height = 200;

    const titulo = document.createElement("h3");
    titulo.textContent = tituloProducto;

    const precio = document.createElement("p");
    precio.textContent = `$${Number(precioProducto).toLocaleString("es-AR")}`;
    precio.className = "precio";

    const boton = document.createElement("button");
    boton.textContent = "Agregar al carrito";
    boton.className = "agregarCarrito";

    boton.onclick = () => {
        agregarAlCarrito({
            nombre: tituloProducto,
            precio: precioProducto,
            img: imagenPrincipal
        });
    };

    enlace.appendChild(imagen);
    contenedor.appendChild(enlace);
    contenedor.appendChild(titulo);
    contenedor.appendChild(precio);
    contenedor.appendChild(boton);

    contenedorCategoria.appendChild(contenedor);
}

// Función para obtener datos de Airtable
export async function GetProductosFromAirTable(tableName) {
    const airTableUrl = `https://api.airtable.com/v0/${airTableBaseId}/${tableName}`;
    try {
        const respuesta = await fetch(airTableUrl, {
            headers: {
                Authorization: `Bearer ${airTableToken}`,
                "Content-Type": "application/json"
            }
        });
        const data = await respuesta.json();

        data.records.forEach(record => {
            const fields = record.fields;
            if (fields.Estado === "activado") {
                agregarProducto(
                    fields.Categoria,
                    `../producto.html?id=${fields.Slug}`,
                    fields.imagenPrincipal,
                    fields.Nombre,
                    fields.Precio
                );
            }
        }); 
    }
    catch (error) {
        console.error("Error al obtener los datos de AirTable: ", error);
    }
}

// buscador de productos
window.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const container = document.querySelector(".contenedorProductos");

  if (!input || !container) return;

  input.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();

    container.querySelectorAll(".producto").forEach((prod) => {
      const nombre = (prod.querySelector("h3")?.textContent || "").toLowerCase();
      const precio = (prod.querySelector(".precio")?.textContent || "").toLowerCase();

      prod.style.display = (nombre.includes(query) || precio.includes(query)) ? "" : "none";
    });
  });
});