import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import EliminarMiembro from "./EliminarMiembro";
import moment from "moment";


moment.locale('es');


const TablaMiembros = ({datos, reload, clickEditar}) => {
    const today = new Date();

    

    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
      "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    
    const filteredData = datos
    .map((element)=>{
      return{
        ...element,
        fechaNacimiento: new Date(element.fecha_nac),
        
      }
    })
    // .filter((element)=> element.fechaNacimiento.getMonth() >= today.getMonth() && element.fechaNacimiento.getDate() >= today.getDate())
    
    .sort((a, b)=>{
      if (a.fechaNacimiento.getMonth() === b.fechaNacimiento.getMonth()) {
        
        return a.fechaNacimiento.getDate() - b.fechaNacimiento.getDate();
      }
      return a.fechaNacimiento.getMonth() - b.fechaNacimiento.getMonth();
    })
    
return (  
<> 
<div 

>

  

{filteredData.length === 0 ?(
      
        <div style={{textAlign: "center"}}>
          <p style={{fontSize: "1.7rem"}}>No hay nada para mostrar</p>
        </div>
      
    ):(
      filteredData.map((element, key)=>{
        
        
        
        
        
        const monthIndex = element.fechaNacimiento.getMonth(); 
        // Índice del mes en el array de meses
        const monthName = meses[monthIndex];
        // Obtener el nombre del mes
        
        const fechaMostrar= moment(element.fecha_nac).format('D');
        return(
  <div key={key} className="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200">
    <div className="flex items-center">
      {/* <img className="rounded-full h-10 w-10" src="../../imagenes/userlogo.png" /> */}
      <img className="rounded-full h-10 w-10" src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png" />
      <div className="ml-2 flex flex-col">
        <div className="leading-snug text-sm text-gray-900 font-bold">{element.nombre}</div>
        <div className="leading-snug text-xs text-gray-600">{element.apellido}</div>
      </div>
    </div>
    <button className="h-8 px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">{fechaMostrar}{' '}de{' '}{monthName}</button>
  </div>
        )}
      )
    )}
  
</div>


  </>
);
};
export default TablaMiembros;
