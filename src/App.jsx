
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Miembros from "./Membresia/cumpleaños/Miembros"
import Limpieza from "./Membresia/limpieza/Limpieza";
import { ToastContainer } from 'react-toastify';
// import Home from "./Membresia/Home";
// import NavBar from "./Membresia/NavBar";
import Logind from "./Logind/Logind";



function App() {

  return (
    <BrowserRouter>
    
    <Routes>
            <Route path="/" element={<Miembros />}/>
            <Route path="/miembros" element={<Miembros />}/>
            <Route path="/limpieza" element={<Limpieza />}/>
            <Route path="/logind" element={<Logind />}/>
            
          
      
    </Routes>
    
    
   
    
    <ToastContainer
        autoClose={3000}
        draggable={false}
        position="top-right"
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </BrowserRouter>
    
  )
}

export default App
