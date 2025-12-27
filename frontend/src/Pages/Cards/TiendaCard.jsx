import React from "react";

function TiendaCard({tiendaData}){

    if(!tiendaData){
        <h1>Cargando datos...</h1>
    }

    return(
        <div>
            <img src={tiendaData.sprites.front_shiny} alt="objImage" />
            <div>
                <h2>{tiendaData.name}</h2>
                <div>
                    <p>desc</p>
                    <p>Precio</p>
                    <div>
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TiendaCard