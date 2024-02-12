import React, { useEffect, useLayoutEffect, useState} from "react";
import { datosLimpieza } from "./dataLimpieza";
import AgregarLimpieza from "./AgregarLimpieza";
import TablaLimpieza from "./TablaLimpieza";
import BuscarLimpieza from "./BuscarLimpieza"
import NavBar from "../NavBar";

// import {} from "../../assets/"




const Limpieza =()=>{
    
    
    
    const [divLista, setDivLista] = useState(true);
  
    const [divAgregar, setDivAgregar] = useState(false);
  
    const [divActualizar, setDivActualizar] = useState(false);

    const[ datosLimpiezaS , setDatosLimpiezaS] = useState({
        nombre: "",
        // apellido: "",
        // fecha_nac: "",
        // telefono: "",
        // estado: "",
    });
    const [datoLimpieza, setDatoLimpieza] = useState([]);
    const[dato, setDato]= useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const[width, setWidth]= useState(window.innerWidth);

  
  const botonAtrasE = ()=>{
    setDivAgregar(false);
    setDivActualizar(false);
    setDivLista(true)
  }
  const botonAgregarE = ()=>{
    setDivAgregar(true);
    setDivActualizar(false);
    setDivLista(false)
  }
//   const botonActualizarE = (miembro)=>{

    
//     setDato(2);
//     setDatosLimpiezaS({

//       id: miembro.id,
//       nombre:miembro.nombre,
//       apellido:apellido,
//       fecha_nac:miembro.fecha_nac,
//       telefono:miembro.telefono,
//       estado:miembro.estado,
//     });
//     setDivAgregar(false);
//     setDivActualizar(true);
//     setDivLista(false)
//   }

  const [searchText, setSearchText] = useState('');
  const handleSearch = (e) => { setSearchText(e.target.value) };
  const filteredData = datoLimpieza.filter((miembro) => {
    return (miembro.nombre ).toLowerCase().includes(searchText.toLowerCase());
  });

  

// datos de mienbros de firebase obtenidos
  const obtenerLimpieza= async()=>{
    
    setIsLoading(true);
    const obtenerlimpieza = await datosLimpieza();
    
    const limpiezaobtenido = [];
    obtenerlimpieza.forEach((element)=>{
        limpiezaobtenido.push({
        id: element.id,
        nombre: element.nombre,
        // fecha_nac: element.fecha_nac,
        // nombre: element.nombre,
        // apellido: element.apellido,
        // telefono:element.telefono       
      })
      
    });

    setDatoLimpieza(limpiezaobtenido);

    
    setIsLoading(false);
    
  };
//   async function editarMiembro(e){  
//     e.preventDefault();
//     const nombre = e.target.formNombre.value;
//     const apellido = e.target.formApellido.value;
//     const fecha_nac = e.target.formFecha_nac.value;
//     const telefono = e.target.formTelefono.value;
//     const estado = e.target.formEstado.value;
    
//     const fechaDate = new Date(fecha_nac+"T00:00:00");
//     const mes = fechaDate.toLocaleDateString('es-ES', { month: 'long' });
  
//     await editarMiembros(datosMiembroS.id,
//       nombre,
//       apellido,
//       fecha_nac,
//       telefono,
//       estado,
//       mes
//     );
    
//     e.target.formNombre.value="";
//     e.target.formApellido.value="";
//     e.target.formFecha_nac.value="";
//     e.target.formTelefono.value="";
//     e.target.formEstado.value="";
    
    
//     fetchGeneral();
//     botonAtrasE();
    
    
  
//   }
  
  async function fetchGeneral(){
    await obtenerLimpieza();
  };
  const handleInputChange=(e)=>{
    const {name, value} = e.target;
    setDatosLimpiezaS({
        ...datosLimpiezaS,
        [name]:value,
    });
};


  useEffect(()=>{
    fetchGeneral();
    
  },[]);
  useLayoutEffect(()=>{
    function handleResize(){
  
      setWidth(window.innerWidth);
    
  }
    window.addEventListener('resize', handleResize)
    console.log(width);
    return ()=>{
        window.removeEventListener('resize', handleResize);
      }
  },[width]);


  return (
    <>
    <NavBar/>
    <div
    className="mt-0 pt-0  max-w mx-auto" 
    style={{ 

          padding:width>1000?200: 0,
          width: "100%", 
          alignContent: "center",
          alignItems: "center",
          
          }}
          >
            
          <div className="mx-auto md:w-1200 w-full md:h-400 h-200">
            <img 
            // src="/assets/listalimpieza.png"
            src="https://i.ibb.co/SJRKgwG/listalimpieza.png"
            className="mx-auto block rounded-lg"
            style={{ width: "auto", height: "auto" }}
            />
            </div>
      
        
        
        {/* <AgregarLimpieza
        onClick={botonAgregarE}
        reload={fetchGeneral}
        /> */}
        
        <div 
            className="w-xl mx-auto mt-1 "
            style={{
            }}
            >
        {/* <BuscarLimpieza
          searchText={searchText} 
          handleSearch={handleSearch} /> */}
        
        <TablaLimpieza
            datos={filteredData}
            reload={fetchGeneral}
            // clickEditar={botonActualizarE}
        />  
        </div>
        {/* <div style={{ margin: 30, display: divActualizar ? "block" : "none" }}>
      <Button
          style={{ float: "right", margin: 30 }}
          variant="outline-danger"
          type="button"
          onClick={botonAtrasE}
        >
          atras
        </Button>
        <div>
          <h3>Actualizar</h3>
          <Form onSubmit={editarMiembro}>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              aria-label="Default select example"
              type="text"
              id="formNombre"
              name="nombre"
              value={datosMiembroS.nombre}
              onChange={handleInputChange}
            />
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              aria-label="Default select example"
              type="text"
              id="formApellido"
              name="apellido"
              value={datosMiembroS.apellido}
              onChange={handleInputChange}
            />
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Control
              aria-label="Default select example"
              type="date"
              id="formFecha_nac"
              name="fecha_nac"
              value={datosMiembroS.fecha_nac}
              onChange={handleInputChange}
            />  
             <Form.Label>Telefono</Form.Label>
            <Form.Control 
              type="number" 
              id="formTelefono"
              name="telefono"
              value={datosMiembroS.telefono}
              onChange={handleInputChange} />
              <Form.Label>Estado</Form.Label>
            <Form.Control
                type="boolean"
                id="formEstado"
                name="estado"
                value={datosMiembroS.estado}
                defaultValue="activo"
                />
            <hr />
            <Button type="submit">Guardar</Button>
          </Form>
        </div>
      </div> */}
      </div>
      
      
      
      
      </>
  );
}
export default Limpieza;