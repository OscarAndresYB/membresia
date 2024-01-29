import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import EliminarMiembro from "./EliminarMiembro";



const TablaMiembros = ({datos, reload, clickEditar}) => {
  const [ordenColumna, setOrdenColumna] = useState(null);
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const handleOrdenar = (columna) => {
    if (ordenColumna === columna) {
      setOrdenAscendente(!ordenAscendente);
    } else {
      setOrdenColumna(columna);
      setOrdenAscendente(true);
    }
  };

  const datosOrdenados = [...datos].sort((a, b) => {
    if (ordenColumna === "nombre") {
      return ordenAscendente ? a.nombre.localeCompare(b.nombre) : b.nombre.localeCompare(a.nombre);
    } else if (ordenColumna === "fecha_nac") {
      return ordenAscendente ? new Date(a.fecha_nac) - new Date(b.fecha_nac) : new Date(b.fecha_nac) - new Date(a.fecha_nac);
    } 
    // else if (ordenColumna === "telefono") {
    //   return ordenAscendente ? a.telefono - b.telefono : b.telefono - a.telefono;
    // }
    return 0;
  });
return (
<> 
<div style={{ textAlign: "center", width: "70%", margin: "auto" }}>
  <ul role="list" className="divide-y divide-gray-20">
    {datosOrdenados.length === 0 ?(
      <li>
        <p>No hay nada para mostrar</p>
      </li>
    ):(
      datosOrdenados.map((element)=>{
        return(
          <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-10">
      <img
        className="h-12 w-12 flex-none rounded-full bg-gray-50"
        src="https://cdn-icons-png.flaticon.com/512/74/74472.png"
        alt
      />
      <div  className="min-w-0 flex-auto" onClick={() => handleOrdenar("nombre")}>
        <p style={{fontSize: "3.3vw"}} className="text-sm font-semibold leading-6 text-gray-900" >
          {element.nombre}
        </p>
        
        <p style={{fontSize: "3vw",padding: '10px' }} className="mt-1 truncate text-xs leading-5 text-gray-500">
          {element.apellido}
        </p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end" onClick={() => handleOrdenar("fecha_nac")}>
      <p style={{fontSize: "2.5vw" }} className="text-sm leading-6 text-gray-900" >{element.fecha_nac}</p>
      
    </div>
  </li>
        )
      })
    )}
  
  </ul>
  </div>
  </>
);
};
export default TablaMiembros;
