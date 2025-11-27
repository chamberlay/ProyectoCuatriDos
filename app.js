document.addEventListener("DOMContentLoaded", () => {

    const airTableToken = "pat7WIp6eyTQda8si.511f3239df29777613e6f749b59940f18d15d764f3da1b3a5bc4f4742cc61054";
    const airTableBaseId = "app2xHmIx8fMyiNyJ";
    const airTableTableName = "Sitios Turisticos";

    const airTableUrl = `https://api.airtable.com/v0/${airTableBaseId}/${airTableTableName}`;

    async function GetSitiosTuristicosFromAirTable() {
        try {
            const respuesta = await fetch(airTableUrl, {
                headers: {
                    'authorization': `Bearer ${airTableToken}`,
                    'Content-Type': 'application/json'
                }
            });
            const data = await respuesta.json();
            console.log("Productos de AirTable: ", data);
        }
        catch (error) {
            console.error("Error al obtener los datos de AirTable: ", error);
        }
    }

    GetSitiosTuristicosFromAirTable();
});







    /*
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

    // Agregar productos de sitios turísticos
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/maderoTangoLetras.jpg", "Madero tango cena show", "25.000");
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/obelisco.jpg", "City tour privado", "15.000");
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/estadioRiver.jpg", "Visita al estadio de river plate", "20.000");
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/caminito.jpg", "Visita a caminito", "12.000");
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/teatroColon.jpg", "Visita guiada al teatro colon", "18.000");
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/malba.jpg", "Visita al malba", "16.000");
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/bellasArtes.jpg", "Visita al museo de bellas artes", "14.000");
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/arteModerno.jpg", "Visita al museo de arte moderno", "14.000");
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/planetario.jpg", "Visita guiada al planetario", "13.000");
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/cementerioRecoleta.jpg", "Visita al cementerio de la recoleta", "10.000");

    // Agregar productos de eventos deportivos
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/riverVsSanMartin.jpg", "Paquete River Plate VS San Martin", "35.000");
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/bocaVsAldosivi.jpg", "Paquete Boca Juniors VS Aldosivi", "32.000");
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/campeonatoPolo.jpg", "Entrada al campeonato de polo", "15.000");
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/argVsVzla.jpg", "Paquete Argentina VS Venezuela", "40.000");
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/finalLibertadores.jpg", "Paquete final de la libertadores", "60.000");
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/carreraHipodromo.jpg", "Hipodromo de Buenos Aires", "12.000");
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/maratonVeintiUno.jpg", "Paquete al maraton 21k", "18.000");
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/argentinaOpen.jpg", "Entrada al Argentina Open", "25.000");
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/maratonCuarentaDos.jpg", "Paquete al maraton 42k", "22.000");
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/turismoCarretera.jpeg", "Paquete Turismo Carretera", "20.000");

    // Agregar productos de recitales
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/shakira.jpg", "Paquete completo Shakira", "45.000");
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/coldplay.jpg", "Paquete completo Coldplay", "50.000");
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/badBunny.jpg", "Paquete completo Bad Bunny", "55.000");
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/carlosVives.jpg", "Paquete completo Carlos Vives", "40.000");
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/juanes.jpg", "Paquete completo Juanes", "38.000");
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/katyPerry.jpg", "Paquete completo Katy Perry", "52.000");
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/donOmar.jpg", "Paquete completo Don Omar", "35.000");
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/theRolling.jpg", "Paquete completo Rolling Stones", "60.000");
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/acDc.jpg", "Paquete completo AC/DC", "58.000");
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/theWeeknd.jpg", "Paquete completo The Weeknd", "54.000");

    // Agregar productos de transportes
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/tiendaLeonEze.jpg", "Traslado aeropuerto EZE", "12.000");
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/tiendaLeonAep.jpg", "Traslado aeropuerto AEP", "10.000");
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/trasladoPrivado.jpg", "Traslado aeropuertos", "15.000");
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/ferryColonia.jpg", "Traslado ida y vuelta Colonia", "18.000");
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/ferryMontevideo.jpg", "Traslado ida y vuelta Montevideo", "20.000");
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/ferryPunta.jpg", "Traslado Punta Del Este", "22.000");
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/barcoColonia.jpeg", "Traslado ida y vuelta Colonia", "17.000");
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/barcoMontevideo.png", "Traslado ida y vuelta Montevideo", "19.000");
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/terminalColonia.jpeg", "Traslado colonia express", "16.000");
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/terminalBuquebus.jpg", "Traslado ida/vuelta buquebus", "21.000");
    */
