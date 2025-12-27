import React from "react";
import { useFetchTienda } from "../CustomHooks/useFetchTienda";
import TiendaCard from "./Cards/TiendaCard";
import { data } from "react-router-dom";

function Tienda(){
  const tiendaData =useFetchTienda("https://pokeapi.co/api/v2/pokemon/")
  
  return(
    <>
      <h1>Todos los objetos </h1>
      <div>
        {
          tiendaData.map((obj,index)=> (
            <TiendaCard key={index} tiendaData= {obj}></TiendaCard>
          ))
        }
      </div>
    </>
  )

}
export default Tienda