import { air_Table_Token, air_Table_Base_Id, table_Name} from './env.js';

document.addEventListener("DOMContentLoaded", () => {

    //funcion para agregar productos a las secciones
    function agregarProducto(clase, href, src, titulo, precio){
        const productos = document.querySelector(clase);
        if(!productos) return;

        const contenedor = document.createElement("div");
        contenedor.className = "producto";

        const newAnchor = document.createElement("a");
        newAnchor.href = href;
        newAnchor.target = "_blank";

        const newImg = document.createElement("img");
        newImg.src = src;
        newImg.width = 300;
        newImg.height = 200;

        const newH3 = document.createElement("h3");
        newH3.textContent = titulo;

        const newPrice = document.createElement("p");
        newPrice.textContent = `$${precio}`;
        newPrice.className = "precio";


        newAnchor.appendChild(newImg);
        contenedor.appendChild(newAnchor);
        contenedor.appendChild(newH3);
        contenedor.appendChild(newPrice);

        productos.appendChild(contenedor);
    }

    // Configuración de Airtable
    const airTableToken = air_Table_Token;
    const airTableBaseId = air_Table_Base_Id;
    const tableName = table_Name;
    const airTableUrl = `https://api.airtable.com/v0/${airTableBaseId}/${tableName}`;

    // Función para obtener datos de Airtable
    async function GetProductosFromAirTable() {
        try {
            // no me esta cargando los productos en GitHub Pages
            console.log("Llamando a Airtable en:", airTableUrl);

            const respuesta = await fetch(airTableUrl, {
                headers: {
                    Authorization: `Bearer ${airTableToken}`,
                    "Content-Type": "application/json"
                }
            });
            const data = await respuesta.json();
            console.log("Productos de AirTable: ", data);

            data.records.forEach(record => {
                const fields = record.fields;

                agregarProducto(
                    fields.Categoria,
                    fields.Url,
                    fields.Img,
                    fields.Nombre,
                    fields.Precio
                );
            }); 
        }
        catch (error) {
            console.error("Error al obtener los datos de AirTable: ", error);
        }
    }

    GetProductosFromAirTable();
});

// Fin del DOMContentLoaded