import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { agregarMiembros } from "./dataMiembros";

const AgregarMiembros=({reload})=>{
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addMiembros = async (e) => {
        e.preventDefault();
        const nombre = e.target.formNombre.value;
        const apellido = e.target.formApellido.value;
        const fecha_nac = e.target.formFecha_nac.value;
        const telefono = e.target.formTelefono.value;
        const estado = e.target.formEstado.value;
        
        const fechaDate = new Date(fecha_nac+"T00:00:00");
        const mes = fechaDate.toLocaleDateString('es-ES', { month: 'long' });
    
        
        const response = await agregarMiembros(
          nombre,
          fecha_nac,
          mes,
          telefono,
          estado,
          apellido
        );
        
        handleClose();
        reload();
      };
    return(
        <Container style={{textAlign: "center" }}>
        
            <Button
                variant="outline-dark"
                style={{ fontSize: "2rem"}} 
                onClick={handleShow}>
                Agregar Miembro
            </Button>
            
            <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Agregar Miembros</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addMiembros}>
          <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="ingrese su nombre"
              id="formNombre"
              required
            />
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="ingrese su apellido"
              id="formApellido"
              required
            />   
          <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" id="formFecha_nac" required />
            
            <Form.Label>telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="su telefono"
              id="formTelefono"
              required
            />
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

export default AgregarMiembros;