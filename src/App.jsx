
import Miembros from "./Membresia/Miembros"
import { ToastContainer } from 'react-toastify';



function App() {

  return (
    <>
    
    <Miembros/>
    
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
    </>
    
  )
}

export default App
