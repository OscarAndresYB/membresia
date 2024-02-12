import {addDoc, collection, deleteDoc, doc, getDocs, getFirestore, setDoc} from "firebase/firestore"
import firebaseApp from "../credenciales";


const baseDEDatos = getFirestore(firebaseApp)
const coleccion = "limpieza";

export const datosLimpieza = async()=>{
    try {
        const limpieza = await getDocs(collection (baseDEDatos, coleccion));
        const datosL = [];
        limpieza.forEach(element => {
            
            datosL.push({
                id: element.id,
                nombre: element.data().nombre,
                
            })
            
        })
        return datosL;
    } catch (error) {
        console.log(error);
        return null;
    }

}
export const agregarLimpieza = async(miembro_limpieza)=>{
    try {
        var referencia_coleccion = collection(baseDEDatos, coleccion);
        var documento_agregar = {
            nombre:         miembro_limpieza.var_nombre,
            
        };
        await addDoc(referencia_coleccion,documento_agregar);
        console.log('agregar reunion correcto');
        return 'ok';
            
    } catch (e) {
        console.log('agregar reunion error');
        console.log(e); 
        return 'error';
    }
}
export const editarLimpieza = async(id, nombre)=>{
    try {
        const docRef = doc(baseDEDatos, coleccion, id)
        await setDoc(docRef, {
            nombre: nombre
        })
    } catch (error) {
        console.log(error);
    }
}
export const eliminarLimpieza = async(id)=>{
    try {
        await deleteDoc(doc(baseDEDatos, coleccion, id))
    } catch (error) {
        console.log(error);
    }
}