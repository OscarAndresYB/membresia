import {Form, InputGroup } from "react-bootstrap";

const BuscarLimpieza = ({searchText,handleSearch})=>{
    return (       
<div 
className='card-body' 
style={{paddingBottom:"0px",
paddingTop:"0px", 
textAlign: "center", }}
>
                <InputGroup className="mb-3" style={{ width: "100%", margin: "0 auto" }}>
                    <InputGroup.Text id="basic-addon1"><i className="fas fa-search"  /></InputGroup.Text>
                    <Form.Control
                      type='search'
                      placeholder="Buscar.."
                      aria-label="Buscar"
                      aria-describedby="basic-addon1"
                      value={searchText}
                      onChange={handleSearch}
                      style={{ fontSize: "2rem", padding: "10px" }}
                    />
                    
                </InputGroup>
                </div>

    )
}

export default BuscarLimpieza;