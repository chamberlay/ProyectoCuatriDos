//importo el archivo env.js con las keys de Airtable
import { air_Table_Token, air_Table_Base_Id} from './env.js';

// Configuración de Airtable
const airTableToken = air_Table_Token;
const airTableBaseId = air_Table_Base_Id;

//funcion para agregar productos a las secciones
function agregarProducto(clase, href, src, titulo, precio){
    const productos = document.querySelector(clase);
    if(!productos) return;

    const contenedor = document.createElement("div");
    contenedor.className = "producto";

    const newAnchor = document.createElement("a");
    newAnchor.href = href;
    //newAnchor.target = "_blank";

    const newImg = document.createElement("img");
    newImg.src = src;
    newImg.width = 300;
    newImg.height = 200;

    const newH3 = document.createElement("h3");
    newH3.textContent = titulo;

    const newPrice = document.createElement("p");
    newPrice.textContent = `$${Number(precio).toLocaleString("es-AR")}`;
    newPrice.className = "precio";


    newAnchor.appendChild(newImg);
    contenedor.appendChild(newAnchor);
    contenedor.appendChild(newH3);
    contenedor.appendChild(newPrice);

    productos.appendChild(contenedor);
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
            const rutaImg = `imagenes/${fields.Img}`;
            agregarProducto(
                fields.Categoria,
                fields.Url,
                rutaImg,
                fields.Nombre,
                fields.Precio
            );

            const valor_Oferta = fields.Oferta === "true";
            if (valor_Oferta) {
                const rutaImg = `imagenes/${fields.Img}`;
                agregarProducto(
                    ".contenedorOfertas",
                    fields.Url,
                    rutaImg,
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

GetProductosFromAirTable("Productos");