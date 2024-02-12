import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";

import { toast } from 'react-toastify';
import { agregarLimpieza } from "./dataLimpieza";

const AgregarLimpieza=({reload})=>{
    
  
  const [isDesktop, setIsDesktop] = useState(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    };

    

    const addLimpieza = async (e) => {
        e.preventDefault();
        const nombre = e.target.formNombre.value;
        // const apellido = e.target.formApellido.value;
        // const fecha_nac = e.target.formFecha_nac.value;
        // const telefono = e.target.formTelefono.value;
        
        // const fechaDate = new Date(fecha_nac+"T00:00:00");
        // const mes = fechaDate.toLocaleDateString('es-ES', { month: 'long' });
    
        const obj_miembro_agregar = {
            // var_mes:        mes,
            // var_telefono:   telefono,
            var_nombre :    nombre,
            // var_apellido:   apellido,
            // var_fecha_nac:  fecha_nac
            
        }
        try {
          const response = await agregarLimpieza(obj_miembro_agregar);
          toast.success( "Encargado de limpieza ingresado correctamente" )
          handleClose();
        reload();
        } catch (error) {
          toast.error("Ocurrio un error al ingresar al encargado de limpieza")
        }
        

        
        
        handleClose();
        reload();
      };

      useEffect(() => {
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    return(
        <Container >
        
            <Button
                variant="primary"
                className="fixed bottom-5 right-5 md:bottom-10 md:right-10 flex items-center justify-center rounded-full bg-blue-300"
                style={{ width: "70px", height: "70px", fontSize: "1.5rem", borderRadius: "50%" }} 
                onClick={handleShow}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-8 h-8 "
                  style={{ marginRight: "0.5rem" }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg> 
                
 
            </Button>
            
            <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Agregar Encargado de Limpieza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addLimpieza}>
          <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="ingrese su nombre"
              id="formNombre"
              required
            />
            {/* <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="ingrese su apellido"
              id="formApellido"
              required
            />    */}
          {/* <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" id="formFecha_nac" required />
            
            <Form.Label>telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="su telefono"
              id="formTelefono"
            /> */}
            {/* <Form.Label>Estado</Form.Label>
            <Form.Control
                type="boolean"
                id="formEstado"
                required
                defaultValue="activo"
                /> */}
                <br/> 
            <Button variant="primary" type="submit" style={{ color: 'black' }}>Guardar</Button>
            <Button variant="danger" onClick={handleClose} style={{ color: 'black' }}>Cerrar</Button>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
        
        
        </Modal.Footer>
      </Modal> 
        </Container>
    )
}

export default AgregarLimpieza;