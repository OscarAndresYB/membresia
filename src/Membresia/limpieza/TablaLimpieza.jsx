import React, { useEffect, useState } from "react";




const TablaLimpieza = ({datos, reload, clickEditar}) => {
    
return (  
<> 
<div 

>
  <br/>
<div className="mx-auto md:w-1200 w-full md:h-400 h-200">
            <img 
            src="https://i0.wp.com/www.fenoglio.com/offline.jpg"
            className="mx-auto block rounded-lg"
            style={{ width: "auto", height: "auto" }}
            />
            </div>
{/* {datos.length === 0 ?(
      <li>
        <p>No hay nada para mostrar</p>
      </li>
    ):(
        datos.map((element)=>{
        return(
  <div className="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200">
    <div className="flex items-center">
      <img className="rounded-full h-10 w-10" src="https://loremflickr.com/g/600/600/girl" />
      <div className="ml-2 flex flex-col">
        <div className="leading-snug text-sm text-gray-900 font-bold">{element.nombre}</div>
      </div>
    </div>
  </div>
        )}
      )
    )} */}
  
</div>


  </>
);
};
export default TablaLimpieza;
