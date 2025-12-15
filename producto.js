import { agregarAlCarrito } from "./carrito.js";
import { air_Table_Token, air_Table_Base_Id } from "./env.js";

// Detectar si estamos en GitHub Pages o en local
const isGitHub = window.location.hostname.includes("github.io");

// Base URL dinámica
const baseURL = isGitHub
  ? "/ProyectoCuatriDos"
  : "";

const galeria = document.getElementById("galeria");
const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const incluye = document.getElementById("incluye");
const botonCarrito = document.getElementById("botonCarrito");

function obtenerSlugDesdeURL() {
  const parametros = new URLSearchParams(window.location.search);
  return parametros.get("id");
}

async function obtenerProductoDesdeAirtable(slug) {
  const url = `https://api.airtable.com/v0/${air_Table_Base_Id}/Productos?filterByFormula={Slug}='${slug}'`;

  const respuesta = await fetch(url, {
    headers: {
      Authorization: `Bearer ${air_Table_Token}`
    }
  });

  const datos = await respuesta.json();

  if (datos.records.length === 0) {
    console.error("Producto no encontrado en Airtable");
    return null;
  }

  return datos.records[0].fields;
}

function renderizarProducto(producto) {

  galeria.innerHTML = "";
  const listaGaleria = producto.Galeria.split("\n").map(linea => linea.trim()).filter(Boolean);

  listaGaleria.forEach(ruta => {
    const imagen = document.createElement("img");
    imagen.src = `${baseURL}/imagenes/${ruta}`;
    imagen.alt = producto.Nombre;
    galeria.appendChild(imagen);
  });

  titulo.textContent = producto.Nombre;
  descripcion.textContent = producto.Descripcion;

  incluye.innerHTML = "";
  const listaIncluye = producto.Incluye.split("\n").map(linea => linea.trim()).filter(Boolean);

  listaIncluye.forEach(item => {
    const elemento = document.createElement("li");
    elemento.innerHTML = item;
    incluye.appendChild(elemento);
  });

  botonCarrito.onclick = () => {
    agregarAlCarrito({
      nombre: producto.Nombre,
      precio: producto.Precio,
      img: `${baseURL}/imagenes/${producto.imagenPrincipal}`
    });
  };
}

window.addEventListener("DOMContentLoaded", async () => {
  const slug = obtenerSlugDesdeURL();

  if (!slug) {
    console.error("No se encontró el parámetro id en la URL");
    return;
  }

  const producto = await obtenerProductoDesdeAirtable(slug);

  if (!producto) {
    console.error("No se pudo cargar el producto");
    return;
  }

  renderizarProducto(producto);
});