document.addEventListener("DOMContentLoaded", () => {

    function agregarProducto(clase, href, src, titulo){
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

        newAnchor.appendChild(newImg);
        contenedor.appendChild(newAnchor);
        contenedor.appendChild(newH3);
        productos.appendChild(contenedor);
    }

    // Agregar productos de sitios turísticos
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/maderoTangoLetras.jpg", "Madero tango cena show");
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/obelisco.jpg", "City tour privado");
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/estadioRiver.jpg", "Visita al estadio de river plate");
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/caminito.jpg", "Visita a caminito");
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/teatroColon.jpg", "Visita guiada al teatro colon");
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/malba.jpg", "Visita al malba");
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/bellasArtes.jpg", "Visita al museo de bellas artes");
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/arteModerno.jpg", "Visita al museo de arte moderno");
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/planetario.jpg", "Visita guiada al planetario");
    agregarProducto(".productosSitiosTuristicos", "../productos/sitiosTuristicos/estadioRiver.html", "../imagenes/cementerioRecoleta.jpg", "Visita al cementerio de la recoleta");

    // Agregar productos de eventos deportivos
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/riverVsSanMartin.jpg", "Paquete River Plate VS San Martin");
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/bocaVsAldosivi.jpg", "Paquete Boca Juniors VS Aldosivi");
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/campeonatoPolo.jpg", "Entrada al campeonato de polo");
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/argVsVzla.jpg", "Paquete Argentina VS Venezuela");
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/finalLibertadores.jpg", "Paquete final de la libertadores");
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/carreraHipodromo.jpg", "Hipodromo de Buenos Aires");
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/maratonVeintiUno.jpg", "Paquete al maraton 21k");
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/argentinaOpen.jpg", "Entrada al Argentina Open");
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/maratonCuarentaDos.jpg", "Paquete al maraton 42k");
    agregarProducto(".productosEventosDeportivos", "../productos/eventosDeportivos/argVsVzla.html", "../imagenes/turismoCarretera.jpeg", "Paquete Turismo Carretera");

    // Agregar productos de recitales
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/shakira.jpg", "Paquete completo shakira");
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/coldplay.jpg", "Paquete completo coldplay");
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/badBunny.jpg", "Paquete completo Bad Bunny");
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/carlosVives.jpg", "Paquete completo Carlos Vives");
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/juanes.jpg", "Paquete completo Juanes");
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/katyPerry.jpg", "Paquete completo Katy Perry");
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/donOmar.jpg", "Paquete completo Don Omar");
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/theRolling.jpg", "Paquete completo Rolling Stones");
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/acDc.jpg", "Paquete completo AcDc");
    agregarProducto(".productosRecitales", "../productos/recitales/conciertoColdplay.html", "../imagenes/theWeeknd.jpg", "Paquete completo The Weeknd");

    // Agregar productos de transportes
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/tiendaLeonEze.jpg", "Traslado aeropuerto EZE");
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/tiendaLeonAep.jpg", "Traslado aeropuerto AEP");
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/trasladoPrivado.jpg", "Traslado aeropuertos");
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/ferryColonia.jpg", "Traslado ida y vuelta Colonia");
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/ferryMontevideo.jpg", "Traslado ida y vuelta Montevideo");
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/ferryPunta.jpg", "Traslado Punta Del Este");
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/barcoColonia.jpeg", "Traslado ida y vuelta colonia");
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/barcoMontevideo.png", "Traslado ida y vuelta Montevideo");
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/terminalColonia.jpeg", "Traslado colonia express");
    agregarProducto(".productosTransportes", "../productos/transporte/tiendaLeonEze.html", "../imagenes/terminalBuquebus.jpg", "Traslado ida/vuelta buquebus");

});
