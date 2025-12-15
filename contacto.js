import { air_Table_Token, air_Table_Base_Id } from "./env.js";

// Detectar si estamos en GitHub Pages o en local
const isGitHub = window.location.hostname.includes("github.io");
const baseURL = isGitHub ? "/ProyectoCuatriDos" : "";

const form = document.getElementById("formContacto");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputEmail = document.getElementById("email");
const inputMensaje = document.getElementById("texto");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Obtener productos del carrito
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const productosTexto =
    carrito.length > 0
        ? carrito.map(p => p.nombre).join("\n")
        : "Sin productos";

  // Datos para Airtable
  const data = {
    fields: {
      Nombre: inputNombre.value,
      Apellido: inputApellido.value,
      Email: inputEmail.value,
      Mensaje: inputMensaje.value,
      Productos: productosTexto
    }
  };

  try {
    const respuesta = await fetch(
      `https://api.airtable.com/v0/${air_Table_Base_Id}/Contacto`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${air_Table_Token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );

    if (!respuesta.ok) {
        console.error("Error al enviar a Airtable:", await respuesta.text());
        mostrarMensajeContacto("Hubo un error al enviar el formulario.", "error");
        return;
    }

        mostrarMensajeContacto("Mensaje enviado correctamente. ¡Gracias por contactarnos!", "exito");

    form.reset();

  } catch (error) {
    console.error("Error:", error);
    mostrarMensajeContacto("Error al enviar el formulario.", "error");
  }
});

function mostrarMensajeContacto(texto, tipo = "exito") {
  const mensaje = document.createElement("div");
  mensaje.textContent = texto;
  mensaje.className = `mensajeContacto ${tipo}`;
  document.body.appendChild(mensaje);

  setTimeout(() => {
    mensaje.classList.add("mostrar");
  }, 10);

  setTimeout(() => {
    mensaje.classList.remove("mostrar");
    setTimeout(() => mensaje.remove(), 300);
  }, 3000);
}